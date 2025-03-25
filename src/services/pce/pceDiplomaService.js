import knex from '../../config/knex.js'; // Ensure you have your Knex instance configured

// Get all diploma records
export const getDiplomas = async () => {
    return await knex('pce.diploma_table').select('*');
};

// Get diploma record by ID
export const getDiplomaById = async (diploma_exam_id) => {
    return await knex('pce.diploma_table').where({ diploma_exam_id }).first();
};

// Add a new diploma record
export const addDiploma = async (data) => {
    return await knex('pce.diploma_table').insert(data).returning('*');
};

// Update an existing diploma record
export const updateDiploma = async (diploma_exam_id, data) => {
    return await knex('pce.diploma_table').where({ diploma_exam_id }).update(data).returning('*');
};

// Delete a diploma record
export const deleteDiploma = async (diploma_exam_id) => {
    return await knex('pce.diploma_table').where({ diploma_exam_id }).del();
};
