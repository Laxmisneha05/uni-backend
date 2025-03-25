import {
    getPICAExaminations,
    getPICAExaminationById,
    getPICAExaminationsByStudentId,
    addPICAExamination,
    updatePICAExamination,
    deletePICAExamination
} from '../../services/pica/picaExamDetService.js';

export default async function (fastify, options) {
    // Get all examination records
    fastify.get('/examinations', async (req, reply) => {
        try {
            const records = await getPICAExaminations();
            reply.send(records);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to fetch examination records' });
        }
    });

    // Get examination record by examination_id
    fastify.get('/examinations/:id', async (req, reply) => {
        try {
            const record = await getPICAExaminationById(req.params.id);
            if (!record) return reply.status(404).send({ error: 'Examination record not found' });
            reply.send(record);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to fetch examination record' });
        }
    });

    // Get examination records by student_id
    fastify.get('/examinations/student/:student_id', async (req, reply) => {
        try {
            const records = await getPICAExaminationsByStudentId(req.params.student_id);
            if (!records.length) return reply.status(404).send({ error: 'No examination records found for this student' });
            reply.send(records);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to fetch examination records by student ID' });
        }
    });

    // Add new examination record
    fastify.post('/examinations', async (req, reply) => {
        try {
            const newRecord = await addPICAExamination(req.body);
            reply.status(201).send(newRecord);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to add examination record' });
        }
    });

    // Update examination record
    fastify.put('/examinations/:id', async (req, reply) => {
        try {
            const updatedRecord = await updatePICAExamination(req.params.id, req.body);
            if (!updatedRecord) return reply.status(404).send({ error: 'Examination record not found' });
            reply.send(updatedRecord);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to update examination record' });
        }
    });

    // Delete examination record
    fastify.delete('/examinations/:id', async (req, reply) => {
        try {
            const deleted = await deletePICAExamination(req.params.id);
            if (!deleted) return reply.status(404).send({ error: 'Examination record not found' });
            reply.send({ message: 'Examination record deleted successfully' });
        } catch (error) {
            reply.status(500).send({ error: 'Failed to delete examination record' });
        }
    });
}
