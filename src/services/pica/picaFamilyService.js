import knex from '../../config/knex.js'; // Ensure knex.js is your Knex instance

// Get all family records
export const getPICAFamilies = async () => {
    return await knex('pica.family_details').select('*');
};

// Get family record by family_id
export const getPICAFamilyById = async (family_id) => {
    return await knex('pica.family_details').where({ family_id }).first();
};

// Get family records by student_id
export const getPICAFamilyByStudentId = async (student_id) => {
    return await knex('pica.family_details').where({ student_id }).select('*');
};

// Add new family record
export const addPICAFamily = async (data) => {
    return await knex('pica.family_details').insert(data).returning('*');
};

// Update family record
export const updatePICAFamily = async (family_id, data) => {
    return await knex('pica.family_details').where({ family_id }).update(data).returning('*');
};

// Delete family record
export const deletePICAFamily = async (family_id) => {
    return await knex('pica.family_details').where({ family_id }).del();
};
