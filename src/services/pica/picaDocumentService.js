import knex from '../../config/knex.js'; // Ensure this is your Knex instance

// Get all document records
export const getPICADocuments = async () => {
    return await knex('pica.documents').select('*');
};

// Get document details by ID
export const getPICADocumentById = async (document_id) => {
    return await knex('pica.documents').where({ document_id }).first();
};

// Add a new document record
export const addPICADocument = async (data) => {
    return await knex('pica.documents').insert(data).returning('*');
};

// Update document details
export const updatePICADocument = async (document_id, data) => {
    return await knex('pica.documents').where({ document_id }).update(data).returning('*');
};

// Delete document details
export const deletePICADocument = async (document_id) => {
    return await knex('pica.documents').where({ document_id }).del();
};
