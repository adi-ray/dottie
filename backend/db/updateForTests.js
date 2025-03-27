import db from './index.js';
import { updateAssessmentSchema } from './migrations/assessmentSchema.js';

/**
 * Apply schema updates for tests
 */
async function updateDatabaseForTests() {
  try {
    console.log('Updating database schema for tests...');
    await updateAssessmentSchema(db);
    console.log('Database schema updated successfully!');
  } catch (error) {
    console.error('Error updating database schema:', error);
    process.exit(1);
  } finally {
    // Close database connection
    if (db.destroy) {
      await db.destroy();
    }
  }
}

// Run the update if this file is executed directly
if (process.argv[1].includes('updateForTests.js')) {
  updateDatabaseForTests();
}

export default updateDatabaseForTests; 