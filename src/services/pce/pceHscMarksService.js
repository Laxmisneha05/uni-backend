import knex from '../../config/knex.js'; // Knex instance

// Get all HSC marks
export const getHSCMarks = async () => {
    return await knex('pce.hsc_marks_table').select('*');
};

// Get HSC marks by ID
export const getHSCMarksById = async (hsc_marks_id) => {
    return await knex('pce.hsc_marks_table').where({ hsc_marks_id }).first();
};

// Add new HSC marks
export const addHSCMarks = async (data) => {
    return await knex('pce.hsc_marks_table').insert(data).returning('*');
};

// Update HSC marks
export const updateHSCMarks = async (hsc_marks_id, data) => {
    return await knex('pce.hsc_marks_table').where({ hsc_marks_id }).update(data).returning('*');
};

// Delete HSC marks
export const deleteHSCMarks = async (hsc_marks_id) => {
    return await knex('pce.hsc_marks_table').where({ hsc_marks_id }).del();
};
