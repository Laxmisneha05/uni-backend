import {
    getHSCMarks,
    getHSCMarksById,
    addHSCMarks,
    updateHSCMarks,
    deleteHSCMarks
} from '../../services/pce/pceHscMarksService.js';

export default async function (fastify, options) {
    fastify.get('/hsc-marks', async (req, reply) => {
        return getHSCMarks();
    });

    fastify.get('/hsc-marks/:id', async (req, reply) => {
        return getHSCMarksById(req.params.id);
    });

    fastify.post('/hsc-marks', async (req, reply) => {
        return addHSCMarks(req.body);
    });

    fastify.put('/hsc-marks/:id', async (req, reply) => {
        return updateHSCMarks(req.params.id, req.body);
    });

    fastify.delete('/hsc-marks/:id', async (req, reply) => {
        return deleteHSCMarks(req.params.id);
    });
}
