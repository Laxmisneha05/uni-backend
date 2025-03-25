import {
    getPICAHscMarks,
    getPICAHscMarksById,
    getPICAHscMarksByExamId,
    addPICAHscMarks,
    updatePICAHscMarks,
    deletePICAHscMarks
} from '../../services/pica/picaHSCMarksService.js';

export default async function (fastify, options) {
    // Get all HSC marks records
    fastify.get('/hsc-marks', async (req, reply) => {
        try {
            const records = await getPICAHscMarks();
            reply.send(records);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to fetch HSC marks records' });
        }
    });

    // Get HSC marks record by hsc_marks_id
    fastify.get('/hsc-marks/:id', async (req, reply) => {
        try {
            const record = await getPICAHscMarksById(req.params.id);
            if (!record) return reply.status(404).send({ error: 'HSC marks record not found' });
            reply.send(record);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to fetch HSC marks record' });
        }
    });

    // Get HSC marks records by examination_id
    fastify.get('/hsc-marks/exam/:exam_id', async (req, reply) => {
        try {
            const records = await getPICAHscMarksByExamId(req.params.exam_id);
            if (!records.length) return reply.status(404).send({ error: 'No HSC marks records found for this examination' });
            reply.send(records);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to fetch HSC marks records by examination ID' });
        }
    });

    // Add new HSC marks record
    fastify.post('/hsc-marks', async (req, reply) => {
        try {
            const newRecord = await addPICAHscMarks(req.body);
            reply.status(201).send(newRecord);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to add HSC marks record' });
        }
    });

    // Update HSC marks record
    fastify.put('/hsc-marks/:id', async (req, reply) => {
        try {
            const updatedRecord = await updatePICAHscMarks(req.params.id, req.body);
            if (!updatedRecord) return reply.status(404).send({ error: 'HSC marks record not found' });
            reply.send(updatedRecord);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to update HSC marks record' });
        }
    });

    // Delete HSC marks record
    fastify.delete('/hsc-marks/:id', async (req, reply) => {
        try {
            const deleted = await deletePICAHscMarks(req.params.id);
            if (!deleted) return reply.status(404).send({ error: 'HSC marks record not found' });
            reply.send({ message: 'HSC marks record deleted successfully' });
        } catch (error) {
            reply.status(500).send({ error: 'Failed to delete HSC marks record' });
        }
    });
}
