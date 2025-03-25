import {
    getEntranceExamDetails,
    getEntranceExamDetailById,
    addEntranceExamDetail,
    updateEntranceExamDetail,
    deleteEntranceExamDetail
} from '../../services/pce/pceEntranceExamService.js';

export default async function (fastify, options) {
    fastify.get('/entrance-exam-details', async (req, reply) => {
        return getEntranceExamDetails();
    });

    fastify.get('/entrance-exam-details/:id', async (req, reply) => {
        return getEntranceExamDetailById(req.params.id);
    });

    fastify.post('/entrance-exam-details', async (req, reply) => {
        return addEntranceExamDetail(req.body);
    });

    fastify.put('/entrance-exam-details/:id', async (req, reply) => {
        return updateEntranceExamDetail(req.params.id, req.body);
    });

    fastify.delete('/entrance-exam-details/:id', async (req, reply) => {
        return deleteEntranceExamDetail(req.params.id);
    });
}
