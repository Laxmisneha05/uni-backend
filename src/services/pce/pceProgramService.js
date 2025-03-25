import knex from '../../config/knex.js'; // Import Knex instance

// Get all programs
export const getPrograms = async () => {
    return await knex('pce.programs').select('*');
};

// Get a program by ID
export const getProgramById = async (program_id) => {
    return await knex('pce.programs').where({ program_id }).first();
};

// Add a new program
export const addProgram = async (data) => {
    return await knex('pce.programs').insert(data).returning('*');
};

// Update a program
export const updateProgram = async (program_id, data) => {
    return await knex('pce.programs').where({ program_id }).update(data).returning('*');
};

// Delete a program
export const deleteProgram = async (program_id) => {
    return await knex('pce.programs').where({ program_id }).del();
};
