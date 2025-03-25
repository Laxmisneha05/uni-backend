import {
    getPICAEmploymentDetails,
    getPICAEmploymentById,
    getPICAEmploymentByStudentId,
    addPICAEmployment,
    updatePICAEmployment,
    deletePICAEmployment
} from '../../services/pica/picaEmpService.js';

export default async function (fastify, options) {
    // Get all employment records
    fastify.get('/employment', async (req, reply) => {
        try {
            const records = await getPICAEmploymentDetails();
            reply.send(records);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to fetch employment records' });
        }
    });

    // Get employment record by employment_id
    fastify.get('/employment/:id', async (req, reply) => {
        try {
            const record = await getPICAEmploymentById(req.params.id);
            if (!record) return reply.status(404).send({ error: 'Employment record not found' });
            reply.send(record);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to fetch employment record' });
        }
    });

    // Get employment records by student_id
    fastify.get('/employment/student/:student_id', async (req, reply) => {
        try {
            const records = await getPICAEmploymentByStudentId(req.params.student_id);
            if (!records.length) return reply.status(404).send({ error: 'No employment records found for this student' });
            reply.send(records);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to fetch employment records by student ID' });
        }
    });

    // Add new employment record
    fastify.post('/employment', async (req, reply) => {
        try {
            const newRecord = await addPICAEmployment(req.body);
            reply.status(201).send(newRecord);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to add employment record' });
        }
    });

    // Update employment record
    fastify.put('/employment/:id', async (req, reply) => {
        try {
            const updatedRecord = await updatePICAEmployment(req.params.id, req.body);
            if (!updatedRecord) return reply.status(404).send({ error: 'Employment record not found' });
            reply.send(updatedRecord);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to update employment record' });
        }
    });

    // Delete employment record
    fastify.delete('/employment/:id', async (req, reply) => {
        try {
            const deleted = await deletePICAEmployment(req.params.id);
            if (!deleted) return reply.status(404).send({ error: 'Employment record not found' });
            reply.send({ message: 'Employment record deleted successfully' });
        } catch (error) {
            reply.status(500).send({ error: 'Failed to delete employment record' });
        }
    });
}
