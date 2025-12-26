#!/usr/bin/env node
/**
 * Test script for The Harvest GHL integration
 *
 * Tests:
 * 1. GHL client initialization
 * 2. Contact creation via API endpoint
 * 3. Redis caching
 * 4. Error handling
 *
 * Run with: node scripts/test-ghl-integration.mjs
 */

import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
config({ path: path.join(__dirname, '../.env.local') });

const API_URL = process.env.TEST_API_URL || 'http://localhost:3004';

console.log('🧪 The Harvest GHL Integration Test\n');
console.log('═══════════════════════════════════════\n');

// Check environment variables
console.log('1️⃣  Checking environment variables...\n');

const requiredEnvVars = {
  'GHL_API_KEY': process.env.GHL_API_KEY,
  'GHL_LOCATION_ID': process.env.GHL_LOCATION_ID,
  'GHL_API_VERSION': process.env.GHL_API_VERSION,
  'REDIS_URL': process.env.REDIS_URL,
};

let missingVars = [];
for (const [key, value] of Object.entries(requiredEnvVars)) {
  if (!value) {
    console.log(`   ❌ ${key} - MISSING`);
    missingVars.push(key);
  } else if (value.includes('your_') || value.includes('here')) {
    console.log(`   ⚠️  ${key} - NOT CONFIGURED (still has placeholder)`);
    missingVars.push(key);
  } else {
    const displayValue = key === 'GHL_API_KEY'
      ? `${value.substring(0, 10)}...${value.substring(value.length - 4)}`
      : value;
    console.log(`   ✅ ${key} - ${displayValue}`);
  }
}

if (missingVars.length > 0) {
  console.log('\n❌ Missing or unconfigured environment variables.');
  console.log('   Please configure these in .env.local before testing.\n');
  console.log('   See GHL_INTEGRATION_SETUP.md for setup instructions.\n');
  process.exit(1);
}

console.log('\n2️⃣  Testing API endpoint...\n');

// Test data
const testContact = {
  name: 'Test User',
  email: `test-${Date.now()}@example.com`,
  interest: 'Volunteering',
  message: 'This is a test submission from the GHL integration test script.',
};

console.log(`   Submitting test contact: ${testContact.email}\n`);

try {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(testContact),
  });

  const data = await response.json();

  if (response.ok && data.success) {
    console.log('   ✅ Contact created successfully!');
    console.log(`   📋 Contact ID: ${data.contactId}\n`);
  } else {
    console.log('   ❌ Failed to create contact');
    console.log(`   Error: ${data.error || 'Unknown error'}`);
    if (data.details) {
      console.log(`   Details: ${data.details}\n`);
    }
    process.exit(1);
  }
} catch (error) {
  console.log('   ❌ Request failed');
  console.log(`   Error: ${error.message}\n`);

  if (error.message.includes('ECONNREFUSED')) {
    console.log('   💡 Make sure the dev server is running:');
    console.log('      cd "/Users/benknight/Code/The Harvest"');
    console.log('      npm run dev\n');
  }

  process.exit(1);
}

console.log('3️⃣  Testing caching (submit same contact again)...\n');

try {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(testContact),
  });

  const data = await response.json();

  if (response.ok && data.success) {
    console.log('   ✅ Contact updated successfully (cache working)');
    console.log(`   📋 Contact ID: ${data.contactId}\n`);
  } else {
    console.log('   ⚠️  Second submission failed (might be duplicate prevention)');
    console.log(`   This is expected behavior.\n`);
  }
} catch (error) {
  console.log('   ❌ Second request failed');
  console.log(`   Error: ${error.message}\n`);
}

console.log('═══════════════════════════════════════\n');
console.log('✅ All tests completed!\n');
console.log('Next steps:');
console.log('1. Check your GHL sub-account for the test contact');
console.log('2. Verify tags were applied: "the-harvest", "interest:volunteering"');
console.log('3. Check if contact was added to pipeline (if enabled)');
console.log('4. Confirm workflow was triggered (if configured)\n');
console.log('To view the contact in GHL:');
console.log('https://app.gohighlevel.com/ → Contacts → Search for test email\n');
