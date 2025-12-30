# The Harvest - GoHighLevel Integration Setup

## Status: Ready for Testing

The Harvest contact form has been fully integrated with GoHighLevel. Once you configure your GHL credentials, all form submissions will automatically create contacts in GHL with proper tagging, pipeline assignment, and workflow triggers.

---

## What's Been Implemented

### 1. API Endpoint
- **File**: `/src/app/api/contact/route.ts`
- **Functionality**:
  - Creates/updates contacts in GHL
  - Applies tags based on interest area (`the-harvest`, `interest:volunteering`, etc.)
  - Stores custom fields (interest area, message, submission date)
  - Adds contacts to appropriate pipeline based on interest
  - Triggers automated workflows
  - Uses Redis caching to prevent duplicate API calls

### 2. Updated Contact Form
- **File**: `/src/app/page.tsx` (lines 14-51)
- **Changes**:
  - Replaced Formspree integration with internal GHL API
  - Form now posts to `/api/contact`
  - Better error handling with specific error messages
  - Same beautiful vintage UI, zero visual changes

### 3. Supporting Libraries
- **Files**:
  - `/src/lib/ghl/client.ts` - GHL API client
  - `/src/lib/ghl/types.ts` - TypeScript type definitions
  - `/src/lib/redis.ts` - Redis caching utilities

---

## Setup Steps

### Step 1: Install Dependencies

```bash
cd "/Users/benknight/Code/The Harvest"
npm install
```

This will install `ioredis` (already added to package.json).

### Step 2: Configure Environment Variables

Copy the example file:
```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and fill in your GHL credentials:

```bash
# GoHighLevel Integration
GHL_API_KEY=sk-live_your_actual_api_key_here
GHL_LOCATION_ID=loc_your_location_id_here
GHL_API_VERSION=2021-07-28

# Optional: Enable pipelines once configured (set to 'true')
GHL_ENABLE_PIPELINES=false

# Optional: Pipeline IDs (configure after creating in GHL)
GHL_VOLUNTEER_PIPELINE_ID=
GHL_EVENT_BOOKING_PIPELINE_ID=
GHL_PARTNERSHIP_PIPELINE_ID=

# Optional: Workflow IDs
GHL_CONTACT_WORKFLOW_ID=

# NAS Services (already configured)
REDIS_URL=redis://192.168.0.34:6379
CHROMADB_URL=http://192.168.0.34:8000
```

### Step 3: Get GHL Credentials

Follow the main [GHL_SETUP_GUIDE.md](../../ACT%20Farm%20and%20Regenerative%20Innovation%20Studio/GHL_SETUP_GUIDE.md) in the Dev Hub to:

1. Create The Harvest sub-account in GHL
2. Generate Private Integration Token
3. Copy Location ID
4. Paste both into `.env.local`

**Required Scopes for The Harvest**:
- `contacts.readonly`
- `contacts.write`
- `conversations.readonly`
- `conversations.write`
- `workflows.readonly`
- `workflows.write`
- `opportunities.readonly` (for pipelines)
- `opportunities.write` (for pipelines)
- `locations/tags.readonly`
- `locations/customFields.readonly`

### Step 4: Create GHL Pipelines (Optional but Recommended)

In your GHL sub-account, create these pipelines:

**1. Volunteer Pipeline**
- Name: "Volunteer Engagement"
- Stages:
  - Initial Inquiry
  - Information Sent
  - Orientation Scheduled
  - Active Volunteer
  - Inactive

**2. Event Booking Pipeline**
- Name: "Event Attendees"
- Stages:
  - Interested
  - Registered
  - Attended
  - Repeat Attendee
  - Inactive

**3. Partnership Pipeline**
- Name: "Partnership Development"
- Stages:
  - Inquiry
  - Discovery Call
  - Proposal Sent
  - Active Partner
  - Inactive

After creating, copy each Pipeline ID and paste into `.env.local`.

### Step 5: Create Workflows (Optional but Recommended)

Create an automated workflow in GHL:

**Contact Form Workflow**
1. Trigger: Contact Created with Tag "the-harvest"
2. Actions:
   - **Wait** 5 minutes
   - **Send Email**: "Thank you for contacting The Harvest"
   - **Wait** 2 days (if no reply)
   - **Send Email**: Follow-up with additional resources
   - **Create Task**: Assign staff member to respond

Copy the Workflow ID and add to `.env.local` as `GHL_CONTACT_WORKFLOW_ID`.

---

## Testing

### Test Locally

1. Start the development server:
```bash
npm run dev
```

2. Open http://localhost:3004 (or your configured port)

3. Fill out the contact form and submit

4. Check the terminal for logs:
```
✅ Cache HIT: ghl:contact:test@example.com
✅ Contact created: con_abc123xyz
```

5. Verify in GHL:
   - Go to your GHL sub-account
   - Navigate to Contacts
   - Search for the email you submitted
   - Confirm contact exists with correct tags and custom fields

### Test Error Handling

Try submitting without GHL credentials configured:
- Should show user-friendly error message
- Should NOT crash or show sensitive info
- Should log detailed error to server console

---

## Form Field Mapping

| Form Field | GHL Field | Type | Notes |
|------------|-----------|------|-------|
| Name | `name` | Text | Standard contact field |
| Email | `email` | Email | Standard contact field (unique identifier) |
| Interest | `tags` | Tag Array | Creates tag like `interest:volunteering` |
| Interest | `customFields.interest_area` | Text | Stores full interest text |
| Message | `customFields.initial_message` | Text | Stores user's message |
| (auto) | `customFields.submission_date` | DateTime | ISO timestamp of submission |
| (auto) | `source` | Text | Always "The Harvest Website" |
| (auto) | `tags` | Tag Array | Always includes "the-harvest" |

---

## Pipeline Assignment Logic

The API automatically assigns contacts to pipelines based on their interest:

| Interest Selection | Pipeline | Initial Stage |
|-------------------|----------|---------------|
| Volunteering | Volunteer Pipeline | Initial Inquiry |
| Workshops & Events | Event Booking Pipeline | Interested |
| Partnership Opportunities | Partnership Pipeline | Inquiry |
| Updates & Newsletter | Volunteer Pipeline | Initial Inquiry |
| Other | Volunteer Pipeline | Initial Inquiry |

You can customize this mapping in `/src/app/api/contact/route.ts` (function `getPipelineIdForInterest`).

---

## Performance Optimizations

### Redis Caching
- Contact lookups cached for 10 minutes
- Prevents duplicate API calls for same contact
- Speeds up repeat submissions
- Automatically invalidates cache on update

### Error Handling
- Graceful degradation if Redis unavailable
- Pipeline creation failures don't block contact creation
- Workflow trigger failures don't block contact creation
- User always sees success message if contact created

---

## Monitoring & Debugging

### Check GHL Integration Status

```bash
# In dev server terminal, look for:
✅ Contact created: con_abc123xyz
✅ Added to pipeline: pip_volunteer
✅ Workflow triggered: wkf_contact_welcome
```

### Common Issues

**"GHL API Error: Unauthorized"**
- Check `GHL_API_KEY` is correct in `.env.local`
- Verify token hasn't expired (90-day rotation)
- Confirm token has required scopes

**"Failed to create opportunity"**
- Pipeline IDs may be incorrect
- Set `GHL_ENABLE_PIPELINES=false` to disable temporarily
- Create pipelines in GHL first, then add IDs

**"Redis connection failed"**
- Check NAS is running: http://192.168.0.34:9000
- Verify Redis container status in Portainer
- Integration will still work, just slower without cache

---

## Next Steps

After successful testing:

1. **Deploy to Production**
   - Add environment variables to Vercel
   - Test production deployment
   - Monitor initial submissions

2. **Customize Email Templates**
   - Design branded email templates in GHL
   - Test automated sequences
   - A/B test subject lines

3. **Add Phone Field** (Optional)
   - Update form UI to include phone field
   - Update API to capture phone number
   - Enable SMS workflows

4. **Analytics**
   - Track form conversion rate
   - Monitor pipeline progression
   - Measure volunteer engagement

---

## Files Modified

- ✅ `/src/app/page.tsx` - Updated form submission handler
- ✅ `/package.json` - Added ioredis dependency
- ✅ `/src/app/api/contact/route.ts` - Created GHL integration API
- ✅ `/src/lib/ghl/client.ts` - Created GHL API client
- ✅ `/src/lib/ghl/types.ts` - Created TypeScript types
- ✅ `/src/lib/redis.ts` - Created Redis caching utilities
- ✅ `.env.local.example` - Created environment template

---

## Support

For issues or questions:
1. Check main [GHL_SETUP_GUIDE.md](../../ACT%20Farm%20and%20Regenerative%20Innovation%20Studio/GHL_SETUP_GUIDE.md)
2. Review GHL documentation: https://marketplace.gohighlevel.com/docs
3. Check GHL API logs in your sub-account

**Integration Status**: ✅ Ready for Testing (pending GHL credentials)
