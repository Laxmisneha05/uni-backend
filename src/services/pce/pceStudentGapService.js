import knex from '../../config/knex.js'; // Import Knex instance

// Get all student gap records
export const getStudentGaps = async () => {
    return await knex('pce.student_gap').select('*');
};

// Get a student gap record by ID
export const getStudentGapById = async (student_gap_id) => {
    return await knex('pce.student_gap').where({ student_gap_id }).first();
};

// Add a new student gap record
export const addStudentGap = async (data) => {
    return await knex('pce.student_gap').insert(data).returning('*');
};

// Update a student gap record
export const updateStudentGap = async (student_gap_id, data) => {
    return await knex('pce.student_gap').where({ student_gap_id }).update(data).returning('*');
};

// Delete a student gap record
export const deleteStudentGap = async (student_gap_id) => {
    return await knex('pce.student_gap').where({ student_gap_id }).del();
};
