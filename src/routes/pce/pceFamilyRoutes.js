import {
    getFamilyDetails,
    getFamilyDetailsById,
    addFamilyDetails,
    updateFamilyDetails,
    deleteFamilyDetails
} from '../../services/pce/pceFamilyDetailsService.js';

export default async function (fastify, options) {
    fastify.get('/family-details', async (req, reply) => {
        return getFamilyDetails();
    });

    fastify.get('/family-details/:id', async (req, reply) => {
        return getFamilyDetailsById(req.params.id);
    });

    fastify.post('/family-details', async (req, reply) => {
        return addFamilyDetails(req.body);
    });

    fastify.put('/family-details/:id', async (req, reply) => {
        return updateFamilyDetails(req.params.id, req.body);
    });

    fastify.delete('/family-details/:id', async (req, reply) => {
        return deleteFamilyDetails(req.params.id);
    });
}
