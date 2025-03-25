import {
    getStudentGaps,
    getStudentGapById,
    addStudentGap,
    updateStudentGap,
    deleteStudentGap
} from '../../services/pce/pceStudentGapService.js';

export default async function (fastify, options) {
    fastify.get('/student-gap', async (req, reply) => {
        return getStudentGaps();
    });

    fastify.get('/student-gap/:id', async (req, reply) => {
        return getStudentGapById(req.params.id);
    });

    fastify.post('/student-gap', async (req, reply) => {
        return addStudentGap(req.body);
    });

    fastify.put('/student-gap/:id', async (req, reply) => {
        return updateStudentGap(req.params.id, req.body);
    });

    fastify.delete('/student-gap/:id', async (req, reply) => {
        return deleteStudentGap(req.params.id);
    });
}
