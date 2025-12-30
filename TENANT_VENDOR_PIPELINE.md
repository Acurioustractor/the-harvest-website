# The Harvest - Tenant/Vendor Management Pipeline

## Overview

The Harvest will support multiple community tenants, pop-up vendors, Witta businesses, and sole traders as part of creating a vibrant community hub. This pipeline manages the full lifecycle from inquiry to active tenant to offboarding.

---

## Tenant/Vendor Types

### **1. Long-Term Tenants**
- **Farm-to-table restaurant/cafe** (anchor tenant)
- **Community retail** (local goods, crafts, produce)
- **Wellness practitioners** (yoga studio, therapy rooms)
- **Educational spaces** (children's programs, workshops)
- **Office/co-working spaces** (for aligned organizations)

### **2. Pop-Up Vendors**
- **Weekend markets** (farmers, crafters, artists)
- **Seasonal events** (Christmas markets, harvest festivals)
- **Food trucks/mobile vendors** (trial before permanent lease)
- **Guest makers** (pottery, textiles, woodwork demonstrations)

### **3. Witta Business Collaborators**
- **Witta General Store** (joint CSA pickup, event co-hosting)
- **Local cafes/restaurants** (ingredient partnerships, cross-promotion)
- **Tourism operators** (tour groups, packages)
- **Event services** (catering, equipment hire)

### **4. Sole Traders/Practitioners**
- **Therapists** (massage, counseling, art therapy)
- **Fitness instructors** (yoga, tai chi, fitness classes)
- **Educators** (music lessons, language classes, skills workshops)
- **Artisans** (studio space with retail component)

---

## Pipeline: Tenant/Vendor Management

### **Stage 1: Inquiry**
**Trigger**: Contact form submitted with "Tenant/Vendor Opportunity" or "Pop-up Event Space"

**What happens**:
- GHL creates contact with tags:
  - `the-harvest`
  - `interest:tenant` (or `interest:popup`, `interest:witta-business`)
  - `priority:medium` (or `priority:high` for anchor tenant types)
- Auto-response email sent within 5 minutes
- Team notified via Slack/email

**Auto-Response Email Template**:
```
Subject: Thank you for your interest in The Harvest community space

Hello [Name],

Thank you for your inquiry about [tenant/pop-up/collaboration] opportunities at The Harvest!

We're building a regenerative community hub where local businesses, makers, and wellness practitioners can thrive alongside our therapeutic gardens and community programs.

What happens next:
1. We'll review your inquiry within 3-5 business days
2. If there's potential alignment, we'll schedule a discovery call
3. We'll arrange a site visit to show you the space
4. We'll discuss terms, pricing, and partnership models

In the meantime, learn more about The Harvest:
- Our vision: [Link to about page]
- Community events: [Link to events calendar]
- Current partners: [Link to partners page]

We're excited to hear about your vision for being part of The Harvest!

Warm regards,
The Harvest Team
0424 054 113
hi@theharvestwitta.com.au
```

**Custom Fields Captured**:
- `tenant_type` (restaurant, retail, wellness, education, office, popup, sole-trader)
- `business_name`
- `business_description` (from message field)
- `proposed_use` (what they want to do at The Harvest)
- `timeline` (when they want to start)

---

### **Stage 2: Initial Review**
**Manual Step**: Team reviews inquiry for mission alignment

**Review Criteria**:
✅ **Must-haves**:
- Alignment with community values (regenerative, inclusive, local)
- Complementary to existing tenants (not competing)
- Financially viable (can afford rent/revenue share)
- Appropriate for heritage site (respectful, low-impact)

⚠️ **Red flags**:
- Purely commercial (no community benefit)
- High environmental impact (waste, energy, chemicals)
- Incompatible with therapeutic programs (noise, crowds, stress)
- Legal/ethical concerns

**Outcomes**:
- **Yes** → Move to "Discovery Call" stage
- **Maybe** → Request more information, keep in "Initial Review"
- **No** → Move to "Not Aligned" stage, send polite decline

**Decline Email Template**:
```
Subject: The Harvest partnership inquiry

Hello [Name],

Thank you for your interest in The Harvest. After careful review, we've determined that [business type] may not be the best fit for our community hub at this time.

This is often due to:
- Space constraints (we have limited availability)
- Alignment with our therapeutic and heritage focus
- Timing (we're not quite ready for [this type of tenant])

We encourage you to:
- Join our newsletter to stay updated as we grow
- Attend our community events to experience The Harvest
- Explore other Witta/Maleny business opportunities

We wish you all the best with your venture!

Warm regards,
The Harvest Team
```

---

### **Stage 3: Discovery Call**
**Trigger**: Team moves contact to this stage

**Automation**:
- Send GHL calendar booking link for 30-minute discovery call
- Remind if not booked within 7 days

**Discovery Call Agenda** (Manual Process):
1. **Understand their vision**: What do they want to create?
2. **Explain The Harvest**: Heritage, community, therapeutic focus
3. **Discuss space options**: Available areas, shared vs. dedicated
4. **Talk pricing models**: Rent, revenue share, equity partnership
5. **Address logistics**: Insurance, permits, hours, parking
6. **Assess alignment**: Are we a good fit for each other?
7. **Next steps**: Site visit if promising

**Post-Call Actions**:
- Add detailed notes to GHL contact record
- Update custom fields:
  - `space_needs` (sq ft, indoor/outdoor, utilities)
  - `budget_range` ($/month they can afford)
  - `preferred_model` (rent, revenue share, equity)
  - `call_outcome` (excited, hesitant, not aligned)
- Move to appropriate stage:
  - **Excited** → "Site Visit Scheduled"
  - **Hesitant** → "Nurture" (send info, check back in 30 days)
  - **Not aligned** → "Not Aligned"

---

### **Stage 4: Site Visit Scheduled**
**Trigger**: Discovery call went well, site visit booked

**Automation**:
- Send calendar invite with:
  - Date/time
  - Meeting point (visitor parking)
  - What to bring (business plan if available)
  - Who they'll meet (team member name)
- 1 day before: SMS reminder
- 2 hours before: Email reminder

**Site Visit Agenda** (Manual Process):
1. **Tour the property**: Show available spaces, gardens, facilities
2. **Introduce to community**: Meet volunteers, other tenants (if any)
3. **Discuss specific spaces**: Measure, envision their setup
4. **Review heritage considerations**: What's protected, what's flexible
5. **Talk financials**: Rough numbers, partnership models
6. **Timeline discussion**: When could they move in?
7. **Q&A**: Address their concerns

**Post-Visit Actions**:
- Update GHL with visit notes
- Send follow-up email within 24 hours:
  - Thank them for visiting
  - Recap discussion
  - Attach: Site map, floor plans, pricing options
  - Next step: Formal proposal or decline

---

### **Stage 5: Proposal Sent**
**Trigger**: Team decides to offer space, sends proposal

**Proposal Contents**:
- **Space details**: Location, size, shared facilities
- **Lease terms**: Duration (6 months trial, 12-month, multi-year)
- **Pricing model**:
  - **Option A**: Fixed rent ($/month)
  - **Option B**: Revenue share (% of gross revenue)
  - **Option C**: Equity partnership (ownership stake in The Harvest)
- **Responsibilities**:
  - Tenant: Insurance, fitout, maintenance, staffing
  - The Harvest: Building maintenance, marketing, community events
- **Community expectations**: Participation, values alignment, reporting
- **Approval process**: Board review, heritage compliance
- **Timeline**: Decision deadline, fitout period, opening date

**Automation**:
- Email proposal as PDF
- Follow up in 7 days: "Have you had a chance to review?"
- Follow up in 14 days: "Any questions? Shall we discuss?"
- After 21 days with no response: Move to "Nurture" (not ready yet)

---

### **Stage 6: Negotiation**
**Trigger**: They respond to proposal, want to discuss terms

**Common Negotiation Points**:
- **Rent amount** (can they afford it?)
- **Revenue share %** (what's fair for both?)
- **Lease duration** (trial period vs. commitment)
- **Fitout costs** (who pays for what?)
- **Exclusivity** (can similar businesses also operate?)
- **Community obligations** (how much participation is expected?)

**Best Practices**:
- Be flexible but fair (community first, but tenant needs to succeed)
- Offer creative solutions (e.g., lower rent + higher community involvement)
- Document everything in writing
- Involve board for major decisions

**Move to next stage when**:
- Terms agreed verbally
- Ready to draft formal agreement

---

### **Stage 7: Agreement Preparation**
**Trigger**: Terms verbally agreed, drafting legal documents

**Documents to Prepare**:
1. **Lease Agreement** (if rent model)
   - Standard commercial lease
   - Heritage site special conditions
   - Community participation clause
   - Termination conditions

2. **Revenue Share Agreement** (if revenue model)
   - Monthly reporting requirements
   - Payment terms
   - Audit rights
   - Performance minimums

3. **Partnership Agreement** (if equity model)
   - Ownership percentage
   - Governance rights
   - Profit distribution
   - Exit clauses

4. **Community Charter** (all models)
   - Values alignment commitment
   - Event participation expectations
   - Conflict resolution process
   - Community decision-making involvement

**Automation**:
- Send draft agreements for review
- Set deadline for signatures (e.g., 14 days)
- Follow up if not signed by deadline

---

### **Stage 8: Agreement Signed**
**Trigger**: All documents executed, deposit paid

**Welcome to The Harvest!**

**Onboarding Automation**:
- **Day 1**: Welcome email with:
  - Signed agreement copy
  - Key/access info (codes, keys, parking passes)
  - Important contacts (coordinator, maintenance, emergency)
  - Community calendar (events they should attend)
  - Marketing pack (logos, photos, brand guidelines)
- **Day 3**: Introduce to community (email to all members/tenants)
- **Week 1**: Schedule onboarding meeting:
  - Review policies (waste, energy, noise, hours)
  - Tour facilities again (utilities, storage, equipment)
  - Introduce to neighbors (other tenants, volunteers)
  - Set up invoicing/payment system

**Custom Fields Update**:
- `tenant_status` → "active"
- `lease_start_date`
- `lease_end_date` (or renewal date)
- `rent_amount` (or revenue_share_percentage)
- `key_access_granted`
- `emergency_contact`

---

### **Stage 9: Fitout Period**
**Trigger**: Between agreement signed and business opening

**Duration**: 1-12 weeks depending on tenant

**Team Support**:
- Coordinate tradespeople (electrician, plumber if needed)
- Heritage compliance checks (especially for structural changes)
- Safety inspections (smoke alarms, fire extinguishers)
- Marketing prep (announce new tenant on social media)

**Weekly Check-ins**:
- Automation: Every Monday, send "How's fitout going?" email
- Manual: Site visit to see progress, offer help

**Move to next stage when**: Fitout complete, ready to open

---

### **Stage 10: Active Tenant**
**Trigger**: Business is operational

**Ongoing Management**:

**Monthly**:
- Rent payment due (automated invoice if fixed rent)
- Revenue report due (if revenue share model)
- Community event participation tracking
- Performance check-in call (first 3 months, then quarterly)

**Quarterly**:
- **Tenant satisfaction survey**: What's working? What needs improvement?
- **Performance review**: Sales, foot traffic, community feedback
- **Planning meeting**: Upcoming events, seasonal changes, needs

**Annually**:
- **Lease renewal conversation** (if coming up)
- **Rent/terms review** (CPI adjustment, renegotiation)
- **Impact reporting**: How has tenant contributed to The Harvest mission?

**Automation Workflows**:
1. **Monthly rent reminder** (3 days before due)
2. **Late payment follow-up** (1 day after due, then 7 days, then 14 days)
3. **Quarterly survey** (automated email)
4. **Annual renewal reminder** (90 days before lease end)
5. **Community spotlight** (feature tenant in newsletter quarterly)

**Red Flags to Monitor**:
- ⚠️ Late payments (3+ times)
- ⚠️ Community complaints (noise, waste, behavior)
- ⚠️ Underperformance (can't afford rent, low sales)
- ⚠️ Misalignment (mission drift, conflicting values)

If red flags arise → Move to "Tenant Support" or "Exit Discussion" stage

---

### **Stage 11: Tenant Support** (Optional)
**Trigger**: Tenant struggling but worth helping

**Common Issues**:
- **Financial**: Sales lower than expected, can't afford rent
- **Operational**: Staffing issues, supply problems
- **Community**: Not integrating well, conflicts with others

**Support Options**:
- **Rent reduction** (temporary, 3-6 months)
- **Marketing support** (social media, events, cross-promotion)
- **Mentorship** (connect with successful tenants, business advisors)
- **Collaboration opportunities** (joint events, bundles, partnerships)
- **Honest conversation** (is this working? Should we part ways amicably?)

**Move to next stage**:
- **If improving** → Back to "Active Tenant"
- **If not improving** → "Exit Discussion"

---

### **Stage 12: Renewal Discussion**
**Trigger**: 90 days before lease expiration

**Automation**:
- Email: "Your lease with The Harvest expires in 90 days"
- Offer calendar link for renewal conversation

**Renewal Conversation Topics**:
1. **Performance review**: How's it been? Successes? Challenges?
2. **Future vision**: Do they want to continue? Expand? Change?
3. **Terms discussion**: Keep same? Adjust rent? Change model?
4. **Community feedback**: What does community think of this tenant?
5. **Space planning**: Any other tenants wanting this space?

**Outcomes**:
- **Renew (same terms)** → Update lease_end_date, return to "Active Tenant"
- **Renew (new terms)** → Move to "Negotiation" stage
- **Don't renew** → Move to "Offboarding" stage

---

### **Stage 13: Offboarding**
**Trigger**: Tenant leaving (end of lease, early exit, or non-renewal)

**Offboarding Checklist**:

**60 days before exit**:
- Confirm exit date
- Discuss final month operations
- Review exit terms (lease restoration, equipment, etc.)
- Start marketing space to new tenants

**30 days before exit**:
- Schedule handover inspection
- Confirm return of keys/access
- Arrange final payment/bond return
- Offer testimonial/story opportunity

**7 days before exit**:
- Final walk-through scheduled
- Goodbye community event (optional, if amicable)
- Remove from active tenant lists

**Exit day**:
- Collect keys, access codes
- Final inspection (document condition)
- Final payment settlement (bond return or final rent)
- Remove access to facilities

**Post-exit**:
- **Day 1**: Thank you email, wish them well
- **Day 7**: Exit survey (why did you leave? How was experience?)
- **Day 30**: Alumni email (join our network, come to events, send referrals)

**Move to**: "Alumni" stage

---

### **Stage 14: Alumni**
**Trigger**: Former tenant, departed on good terms

**Benefits of Alumni Status**:
- Invitation to major community events (annual harvest festival, etc.)
- Priority consideration if they want to return
- Referrals welcomed (if they know good potential tenants)
- Case study opportunities (if they succeeded, share story)

**Automation**:
- Quarterly alumni newsletter
- Annual "We'd love to have you back" email
- Invitation to reunion events

**Alumni can become**:
- Return tenant (reactivate)
- Partner (collaborate without being tenant)
- Advocate (refer others, speak at events)

---

## Pop-Up Vendor Fast-Track Pipeline

For **short-term pop-ups** (markets, events, single-day vendors), use simplified pipeline:

### **Stages**:
1. **Inquiry** → Auto-response with pop-up info pack
2. **Application** → Simple form (business name, products, dates wanted, fees)
3. **Approved** → Send contract, collect deposit
4. **Confirmed** → Pre-event logistics (setup time, parking, electricity)
5. **Event Day** → Check-in, support during event
6. **Completed** → Thank you, survey, invite to next event

**Pricing Model**:
- Daily rate: $50-$150 (depends on space, electricity, prominence)
- Seasonal pass: 10 events for price of 8
- Community discount: 20% off for Witta residents

**Automation**:
- Auto-invoice upon approval
- Auto-reminder 1 week before event
- Auto-survey day after event

---

## Revenue Models for Different Tenant Types

### **1. Fixed Rent** (Stable, predictable)
- **Best for**: Established businesses, office/retail
- **Range**: $500-$3,000/month (depends on space size)
- **Terms**: Net lease (tenant pays utilities) or gross lease (all-inclusive)
- **Example**: Cafe pays $2,000/month for 100sqm commercial kitchen + dining area

### **2. Revenue Share** (Risk/reward shared)
- **Best for**: Startups, aligned missions, uncertain income
- **Range**: 10-30% of gross revenue
- **Terms**: Monthly reporting, quarterly reconciliation
- **Example**: Farm-to-table restaurant pays 20% of gross revenue (no minimum)

### **3. Hybrid** (Balanced)
- **Best for**: Most tenants
- **Model**: Low base rent + revenue share above threshold
- **Example**: Yoga studio pays $500/month + 15% of revenue over $3,000/month

### **4. Equity Partnership** (Long-term alignment)
- **Best for**: Anchor tenants, mission-aligned businesses
- **Model**: Tenant gets ownership stake in The Harvest in exchange for sweat equity, capital investment, or revenue sharing
- **Example**: Restaurant invests $50k in fitout, gets 5% ownership in The Harvest, pays reduced rent

### **5. Barter/Trade** (Community-focused)
- **Best for**: Therapists, educators, sole traders
- **Model**: Reduce/waive rent in exchange for services to community
- **Example**: Counselor provides 10 hours/month free therapy to program participants, pays $200/month instead of $800

---

## Metrics to Track

### **Pipeline Health**:
- Inquiries per month (target: 5-10)
- Conversion rate (inquiry → signed lease) (target: 20-30%)
- Average time to sign (target: 60-90 days)
- Drop-off stage (where do most exit?)

### **Tenant Performance**:
- Occupancy rate (% of available space leased) (target: 80%+)
- Revenue per tenant (average $/month)
- Tenant satisfaction score (quarterly survey) (target: 4/5)
- Retention rate (% who renew) (target: 70%+)

### **Community Impact**:
- Community event participation (% of tenants involved)
- Cross-tenant collaborations (joint events, bundles)
- Local hiring (% of tenant staff from Witta/Maleny)
- Mission alignment score (values assessment)

---

## GHL Environment Variables to Add

Update `/Users/benknight/Code/The Harvest/.env.local`:

```bash
# Tenant/Vendor Pipeline
GHL_TENANT_PIPELINE_ID=
GHL_TENANT_INITIAL_STAGE_ID=
GHL_TENANT_ONBOARDING_WORKFLOW_ID=
GHL_TENANT_MONTHLY_INVOICE_WORKFLOW_ID=
GHL_TENANT_RENEWAL_WORKFLOW_ID=
```

---

## Next Steps

1. **Create Tenant Pipeline in GHL** (14 stages as outlined above)
2. **Build automation workflows**:
   - Auto-response to inquiries
   - Discovery call booking
   - Proposal follow-ups
   - Monthly rent reminders
   - Quarterly check-ins
   - Annual renewal reminders
3. **Create email templates** (20+ templates for each stage)
4. **Set up calendar booking** (discovery calls, site visits, check-ins)
5. **Build reporting dashboard** (occupancy, revenue, pipeline health)

---

**This pipeline turns The Harvest tenant management from reactive to proactive, ensuring every potential tenant gets a professional experience while maintaining community values and financial sustainability.**
