import { NextRequest, NextResponse } from 'next/server';
import { createGHLClient } from '@/lib/ghl/client';
import { withCache, setCached } from '@/lib/redis';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, interest, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Initialize GHL client
    const ghlClient = createGHLClient();

    // Check if contact already exists (with Redis caching)
    let existingContact;
    try {
      existingContact = await withCache(
        `ghl:contact:${email}`,
        async () => {
          try {
            return await ghlClient.contacts.searchByEmail(email);
          } catch (error) {
            // If contact not found, return null
            return null;
          }
        },
        600 // 10-minute cache
      );
    } catch (error) {
      console.log('Contact lookup failed, will create new:', error);
      existingContact = null;
    }

    // Create or update contact in GHL
    const contactData = {
      email,
      name,
      phone: '', // Optional - can add phone field to form later
      source: 'The Harvest Website',
      tags: ['the-harvest', `interest:${interest.toLowerCase()}`],
      customFields: {
        interest_area: interest,
        initial_message: message || '',
        submission_date: new Date().toISOString(),
      },
    };

    let contact;
    if (existingContact && Array.isArray(existingContact) && existingContact.length > 0) {
      // Update existing contact (use first match)
      const firstContact = existingContact[0];
      if (!firstContact.id) {
        throw new Error('Contact ID not found');
      }
      contact = await ghlClient.contacts.updateCustomFields(
        firstContact.id,
        contactData.customFields
      );

      // Add new tags
      await ghlClient.contacts.addTags(firstContact.id, contactData.tags);
    } else {
      // Create new contact
      contact = await ghlClient.contacts.upsert(contactData);
    }

    // Invalidate cache for this contact
    await setCached(`ghl:contact:${email}`, contact, 600);

    // Add to appropriate pipeline based on interest
    const pipelineId = getPipelineIdForInterest(interest);
    if (pipelineId && contact?.id && process.env.GHL_ENABLE_PIPELINES === 'true') {
      try {
        await ghlClient.opportunities.create({
          contactId: contact.id,
          pipelineId,
          pipelineStageId: getInitialStageId(pipelineId),
          name: `${name} - ${interest}`,
          status: 'open',
        });
      } catch (error) {
        console.error('Failed to create opportunity:', error);
        // Don't fail the whole request if pipeline creation fails
      }
    }

    // Trigger workflow if configured
    // TODO: Fix workflow trigger API signature
    // if (process.env.GHL_CONTACT_WORKFLOW_ID && contact?.id) {
    //   try {
    //     await ghlClient.workflows.trigger(process.env.GHL_CONTACT_WORKFLOW_ID, {
    //       contactId: contact.id,
    //     });
    //   } catch (error) {
    //     console.error('Failed to trigger workflow:', error);
    //   }
    // }

    // Return success
    return NextResponse.json({
      success: true,
      message: 'Contact submitted successfully',
      contactId: contact.id,
    });

  } catch (error) {
    console.error('GHL API Error:', error);

    // Return a user-friendly error
    return NextResponse.json(
      {
        error: 'Failed to submit contact form',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * Get pipeline ID based on user's interest
 */
function getPipelineIdForInterest(interest: string): string | null {
  const interestToPipeline: Record<string, string | undefined> = {
    'Volunteering': process.env.GHL_VOLUNTEER_PIPELINE_ID,
    'Workshops & Events': process.env.GHL_EVENT_BOOKING_PIPELINE_ID,
    'Partnership Opportunities': process.env.GHL_PARTNERSHIP_PIPELINE_ID,
    'Tenant/Vendor Opportunity': process.env.GHL_TENANT_PIPELINE_ID,
    'Pop-up Event Space': process.env.GHL_TENANT_PIPELINE_ID,
    'Witta Business Collaboration': process.env.GHL_PARTNERSHIP_PIPELINE_ID,
    'Updates & Newsletter': process.env.GHL_VOLUNTEER_PIPELINE_ID,
    'Other': process.env.GHL_VOLUNTEER_PIPELINE_ID,
  };

  return interestToPipeline[interest] || null;
}

/**
 * Get initial pipeline stage ID
 * Note: These should be configured per pipeline in .env.local
 */
function getInitialStageId(pipelineId: string): string {
  // Default to 'new' stage - update these with actual stage IDs from your GHL pipelines
  const pipelineStages: Record<string, string> = {
    [process.env.GHL_VOLUNTEER_PIPELINE_ID || '']: process.env.GHL_VOLUNTEER_INITIAL_STAGE_ID || 'new',
    [process.env.GHL_EVENT_BOOKING_PIPELINE_ID || '']: process.env.GHL_EVENT_INITIAL_STAGE_ID || 'new',
    [process.env.GHL_PARTNERSHIP_PIPELINE_ID || '']: process.env.GHL_PARTNERSHIP_INITIAL_STAGE_ID || 'new',
  };

  return pipelineStages[pipelineId] || 'new';
}
