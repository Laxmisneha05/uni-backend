import knex from '../../config/knex.js';
import { pceContactValidation } from '../../controllers/pce/pceValidations.js';

// Get all contact details
export const getPCEContacts = async () => {
    return await knex('pce.contact_details').select('*');
};

// Get contact details by ID
export const getPCEContactById = async (contact_id) => {
    return await knex('pce.contact_details').where({ contact_id }).first();
};

// Add new contact details (Validating mobile, email, and pincode)
export const addPCEContact = async (data) => {
    const { error } = pceContactValidation.validate(data, { allowUnknown: true });
    if (error) {
        return { status: 400, message: error.details[0].message };  // Return proper validation error
    }
    return await knex('pce.contact_details').insert(data).returning('*');
};

// Update contact details (Validating mobile, email, and pincode)
export const updatePCEContact = async (contact_id, data) => {
    const { error } = pceContactValidation.validate(data, { allowUnknown: true });
    if (error) {
        return { status: 400, message: error.details[0].message };
    }
    return await knex('pce.contact_details').where({ contact_id }).update(data).returning('*');
};

// Delete contact details
export const deletePCEContact = async (contact_id) => {
    return await knex('pce.contact_details').where({ contact_id }).del();
};
