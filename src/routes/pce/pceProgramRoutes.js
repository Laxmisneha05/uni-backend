import {
    getPrograms,
    getProgramById,
    addProgram,
    updateProgram,
    deleteProgram
} from '../../services/pce/pceProgramService.js';

export default async function (fastify, options) {
    fastify.get('/programs', async (req, reply) => {
        return getPrograms();
    });

    fastify.get('/programs/:id', async (req, reply) => {
        return getProgramById(req.params.id);
    });

    fastify.post('/programs', async (req, reply) => {
        return addProgram(req.body);
    });

    fastify.put('/programs/:id', async (req, reply) => {
        return updateProgram(req.params.id, req.body);
    });

    fastify.delete('/programs/:id', async (req, reply) => {
        return deleteProgram(req.params.id);
    });
}
