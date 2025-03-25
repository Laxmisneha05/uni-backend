import knex from '../../config/knex.js'; // Ensure you have your Knex instance configured

// Get all entrance exam details
export const getEntranceExamDetails = async () => {
    return await knex('pce.entrance_exam_details').select('*');
};

// Get entrance exam details by ID
export const getEntranceExamDetailById = async (entrance_exam_id) => {
    return await knex('pce.entrance_exam_details').where({ entrance_exam_id }).first();
};

// Add new entrance exam details
export const addEntranceExamDetail = async (data) => {
    return await knex('pce.entrance_exam_details').insert(data).returning('*');
};

// Update existing entrance exam details
export const updateEntranceExamDetail = async (entrance_exam_id, data) => {
    return await knex('pce.entrance_exam_details').where({ entrance_exam_id }).update(data).returning('*');
};

// Delete entrance exam details
export const deleteEntranceExamDetail = async (entrance_exam_id) => {
    return await knex('pce.entrance_exam_details').where({ entrance_exam_id }).del();
};
