import knex from '../../config/knex.js'; // Ensure db.js is your Knex instance

// Get all contact details
export const getPICAContacts = async () => {
    return await knex('pica.contact_details').select('*');
};

// Get contact details by ID
export const getPICAContactById = async (contact_id) => {
    return await knex('pica.contact_details').where({ contact_id }).first();
};

// Add new contact details
export const addPICAContact = async (data) => {
    return await knex('pica.contact_details').insert(data).returning('*');
};

// Update contact details
export const updatePICAContact = async (contact_id, data) => {
    return await knex('pica.contact_details').where({ contact_id }).update(data).returning('*');
};

// Delete contact details
export const deletePICAContact = async (contact_id) => {
    return await knex('pica.contact_details').where({ contact_id }).del();
};
