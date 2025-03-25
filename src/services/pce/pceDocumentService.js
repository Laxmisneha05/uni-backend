import knex from '../../config/knex.js'; // Ensure this is your Knex instance

// Get all document records
export const getPCEDocuments = async () => {
    return await knex('pce.documents').select('*');
};

// Get document details by ID
export const getPCEDocumentById = async (document_id) => {
    return await knex('pce.documents').where({ document_id }).first();
};

// Add a new document record
export const addPCEDocument = async (data) => {
    return await knex('pce.documents').insert(data).returning('*');
};

// Update document details
export const updatePCEDocument = async (document_id, data) => {
    return await knex('pce.documents').where({ document_id }).update(data).returning('*');
};

// Delete document details
export const deletePCEDocument = async (document_id) => {
    return await knex('pce.documents').where({ document_id }).del();
};
