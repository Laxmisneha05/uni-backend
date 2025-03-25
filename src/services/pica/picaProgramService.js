import knex from '../../config/knex.js'; // Ensure knex.js is your Knex instance

// Get all programs
export const getPrograms = async () => {
    return await knex('pica.programs').select('*');
};

// Get program by ID
export const getProgramById = async (id) => {
    return await knex('pica.programs').where({ id }).first();
};

// Add new program
export const addProgram = async (data) => {
    return await knex('pica.programs').insert(data).returning('*');
};

// Update program
export const updateProgram = async (id, data) => {
    return await knex('pica.programs').where({ id }).update(data).returning('*');
};

// Delete program
export const deleteProgram = async (id) => {
    return await knex('pica.programs').where({ id }).del();
};
