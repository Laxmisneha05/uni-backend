import knex from '../../config/knex.js'; // Ensure knex.js is your Knex instance

// Get all employment records
export const getPICAEmploymentDetails = async () => {
    return await knex('pica.employment_details').select('*');
};

// Get employment record by employment_id
export const getPICAEmploymentById = async (employment_id) => {
    return await knex('pica.employment_details').where({ employment_id }).first();
};

// Get employment records by student_id
export const getPICAEmploymentByStudentId = async (student_id) => {
    return await knex('pica.employment_details').where({ student_id }).select('*');
};

// Add new employment record
export const addPICAEmployment = async (data) => {
    return await knex('pica.employment_details').insert(data).returning('*');
};

// Update employment record
export const updatePICAEmployment = async (employment_id, data) => {
    return await knex('pica.employment_details').where({ employment_id }).update(data).returning('*');
};

// Delete employment record
export const deletePICAEmployment = async (employment_id) => {
    return await knex('pica.employment_details').where({ employment_id }).del();
};
