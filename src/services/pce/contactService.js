import knex from '../../config/knex.js'; // Ensure db.js is your Knex instance

// Get all contact details
export const getPCEContacts = async () => {
    return await knex('pce.contact_details').select('*');
};

// Get contact details by ID
export const getPCEContactById = async (contact_id) => {
    return await knex('pce.contact_details').where({ contact_id }).first();
};

// Add new contact details
export const addPCEContact = async (data) => {
    return await knex('pce.contact_details').insert(data).returning('*');
};

// Update contact details
export const updatePCEContact = async (contact_id, data) => {
    return await knex('pce.contact_details').where({ contact_id }).update(data).returning('*');
};

// Delete contact details
export const deletePCEContact = async (contact_id) => {
    return await knex('pce.contact_details').where({ contact_id }).del();
};
