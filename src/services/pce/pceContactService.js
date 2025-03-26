import knex from '../../config/knex.js';
import { pceContactValidation } from '../../validations/pce_validations.js';

// Get all contact details
export const getPCEContacts = async () => {
    return await knex('pce.contact_details').select('*');
};

// Get contact details by ID
export const getPCEContactById = async (contact_id) => {
    return await knex('pce.contact_details').where({ contact_id }).first();
};

// Add new contact details (Validating only mobile & email)
export const addPCEContact = async (data) => {
    const { error } = pceContactValidation.validate(data, { allowUnknown: true });
    if (error) {
        throw new Error(error.details[0].message);  // Throw validation error
    }
    return await knex('pce.contact_details').insert(data).returning('*');
};

// Update contact details (Validating only mobile & email)
export const updatePCEContact = async (contact_id, data) => {
    const { error } = pceContactValidation.validate(data, { allowUnknown: true });
    if (error) {
        throw new Error(error.details[0].message);
    }
    return await knex('pce.contact_details').where({ contact_id }).update(data).returning('*');
};

// Delete contact details
export const deletePCEContact = async (contact_id) => {
    return await knex('pce.contact_details').where({ contact_id }).del();
};
