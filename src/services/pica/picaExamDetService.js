import knex from '../../config/knex.js'; // Ensure knex.js is your Knex instance

// Get all examination records
export const getPICAExaminations = async () => {
    return await knex('pica.examination_details').select('*');
};

// Get examination record by examination_id
export const getPICAExaminationById = async (examination_id) => {
    return await knex('pica.examination_details').where({ examination_id }).first();
};

// Get examination records by student_id
export const getPICAExaminationsByStudentId = async (student_id) => {
    return await knex('pica.examination_details').where({ student_id }).select('*');
};

// Add new examination record
export const addPICAExamination = async (data) => {
    return await knex('pica.examination_details').insert(data).returning('*');
};

// Update examination record
export const updatePICAExamination = async (examination_id, data) => {
    return await knex('pica.examination_details').where({ examination_id }).update(data).returning('*');
};

// Delete examination record
export const deletePICAExamination = async (examination_id) => {
    return await knex('pica.examination_details').where({ examination_id }).del();
};
