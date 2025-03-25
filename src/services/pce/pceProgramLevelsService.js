import knex from '../../config/knex.js'; // Import Knex

// Get all program levels
export const getProgramLevels = async () => {
    return await knex('pce.program_levels').select('*');
};

// Get program level by ID
export const getProgramLevelById = async (program_level_id) => {
    return await knex('pce.program_levels').where({ program_level_id }).first();
};

// Add a new program level
export const addProgramLevel = async (data) => {
    return await knex('pce.program_levels').insert(data).returning('*');
};

// Update program level
export const updateProgramLevel = async (program_level_id, data) => {
    return await knex('pce.program_levels').where({ program_level_id }).update(data).returning('*');
};

// Delete program level
export const deleteProgramLevel = async (program_level_id) => {
    return await knex('pce.program_levels').where({ program_level_id }).del();
};
