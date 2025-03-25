import {
    getPICADocuments,
    getPICADocumentById,
    addPICADocument,
    updatePICADocument,
    deletePICADocument
} from '../../services/pica/picaDocumentService.js';

export default async function (fastify, options) {
    fastify.get('/documents', async (req, reply) => {
        return getPICADocuments();
    });

    fastify.get('/documents/:id', async (req, reply) => {
        return getPICADocumentById(req.params.id);
    });

    fastify.post('/documents', async (req, reply) => {
        return addPICADocument(req.body);
    });

    fastify.put('/documents/:id', async (req, reply) => {
        return updatePICADocument(req.params.id, req.body);
    });

    fastify.delete('/documents/:id', async (req, reply) => {
        return deletePICADocument(req.params.id);
    });
}
