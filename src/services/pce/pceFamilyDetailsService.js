import knex from '../../config/knex.js'; // Knex instance

// Get all family details
export const getFamilyDetails = async () => {
    return await knex('pce.family_details').select('*');
};

// Get family details by ID
export const getFamilyDetailsById = async (family_id) => {
    return await knex('pce.family_details').where({ family_id }).first();
};

// Add new family details
export const addFamilyDetails = async (data) => {
    return await knex('pce.family_details').insert(data).returning('*');
};

// Update family details
export const updateFamilyDetails = async (family_id, data) => {
    return await knex('pce.family_details').where({ family_id }).update(data).returning('*');
};

// Delete family details
export const deleteFamilyDetails = async (family_id) => {
    return await knex('pce.family_details').where({ family_id }).del();
};
