import {
    getProgramLevels,
    getProgramLevelById,
    addProgramLevel,
    updateProgramLevel,
    deleteProgramLevel
} from '../../services/pce/pceProgramLevelsService.js';

export default async function (fastify, options) {
    fastify.get('/program-levels', async (req, reply) => {
        return getProgramLevels();
    });

    fastify.get('/program-levels/:id', async (req, reply) => {
        return getProgramLevelById(req.params.id);
    });

    fastify.post('/program-levels', async (req, reply) => {
        return addProgramLevel(req.body);
    });

    fastify.put('/program-levels/:id', async (req, reply) => {
        return updateProgramLevel(req.params.id, req.body);
    });

    fastify.delete('/program-levels/:id', async (req, reply) => {
        return deleteProgramLevel(req.params.id);
    });
}
