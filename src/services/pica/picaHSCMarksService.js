import knex from '../../config/knex.js'; // Ensure knex.js is your Knex instance

// Get all HSC marks records
export const getPICAHscMarks = async () => {
    return await knex('pica.hsc_marks_details').select('*');
};

// Get HSC marks record by hsc_marks_id
export const getPICAHscMarksById = async (hsc_marks_id) => {
    return await knex('pica.hsc_marks_details').where({ hsc_marks_id }).first();
};

// Get HSC marks by examination_id
export const getPICAHscMarksByExamId = async (examination_id) => {
    return await knex('pica.hsc_marks_details').where({ examination_id }).select('*');
};

// Add new HSC marks record
export const addPICAHscMarks = async (data) => {
    return await knex('pica.hsc_marks_details').insert(data).returning('*');
};

// Update HSC marks record
export const updatePICAHscMarks = async (hsc_marks_id, data) => {
    return await knex('pica.hsc_marks_details').where({ hsc_marks_id }).update(data).returning('*');
};

// Delete HSC marks record
export const deletePICAHscMarks = async (hsc_marks_id) => {
    return await knex('pica.hsc_marks_details').where({ hsc_marks_id }).del();
};
