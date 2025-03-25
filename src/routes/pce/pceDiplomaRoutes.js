import {
    getDiplomas,
    getDiplomaById,
    addDiploma,
    updateDiploma,
    deleteDiploma
} from '../../services/pce/pceDiplomaService.js';


export default async function (fastify, options) {
    fastify.get('/diploma', async (req, reply) => {
        return getDiplomas();
    });

    fastify.get('/diploma/:id', async (req, reply) => {
        return getDiplomaById(req.params.id);
    });

    fastify.post('/diploma', async (req, reply) => {
        return addDiploma(req.body);
    });

    fastify.put('/diploma/:id', async (req, reply) => {
        return updateDiploma(req.params.id, req.body);
    });

    fastify.delete('/diploma/:id', async (req, reply) => {
        return deleteDiploma(req.params.id);
    });
}
