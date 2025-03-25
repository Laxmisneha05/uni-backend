import {
    getPCEDocuments,
    getPCEDocumentById,
    addPCEDocument,
    updatePCEDocument,
    deletePCEDocument
} from '../../services/pce/pceDocumentService.js';

export default async function (fastify, options) {
    fastify.get('/documents', async (req, reply) => {
        return getPCEDocuments();
    });

    fastify.get('/documents/:id', async (req, reply) => {
        return getPCEDocumentById(req.params.id);
    });

    fastify.post('/documents', async (req, reply) => {
        return addPCEDocument(req.body);
    });

    fastify.put('/documents/:id', async (req, reply) => {
        return updatePCEDocument(req.params.id, req.body);
    });

    fastify.delete('/documents/:id', async (req, reply) => {
        return deletePCEDocument(req.params.id);
    });
}
