import {
    getPICAFamilies,
    getPICAFamilyById,
    getPICAFamilyByStudentId,
    addPICAFamily,
    updatePICAFamily,
    deletePICAFamily
} from '../../services/pica/picaFamilyService.js';

export default async function (fastify, options) {
    // Get all family records
    fastify.get('/families', async (req, reply) => {
        try {
            const records = await getPICAFamilies();
            reply.send(records);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to fetch family records' });
        }
    });

    // Get family record by family_id
    fastify.get('/families/:id', async (req, reply) => {
        try {
            const record = await getPICAFamilyById(req.params.id);
            if (!record) return reply.status(404).send({ error: 'Family record not found' });
            reply.send(record);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to fetch family record' });
        }
    });

    // Get family records by student_id
    fastify.get('/families/student/:student_id', async (req, reply) => {
        try {
            const records = await getPICAFamilyByStudentId(req.params.student_id);
            if (!records.length) return reply.status(404).send({ error: 'No family records found for this student' });
            reply.send(records);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to fetch family records by student ID' });
        }
    });

    // Add new family record
    fastify.post('/families', async (req, reply) => {
        try {
            const newRecord = await addPICAFamily(req.body);
            reply.status(201).send(newRecord);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to add family record' });
        }
    });

    // Update family record
    fastify.put('/families/:id', async (req, reply) => {
        try {
            const updatedRecord = await updatePICAFamily(req.params.id, req.body);
            if (!updatedRecord) return reply.status(404).send({ error: 'Family record not found' });
            reply.send(updatedRecord);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to update family record' });
        }
    });

    // Delete family record
    fastify.delete('/families/:id', async (req, reply) => {
        try {
            const deleted = await deletePICAFamily(req.params.id);
            if (!deleted) return reply.status(404).send({ error: 'Family record not found' });
            reply.send({ message: 'Family record deleted successfully' });
        } catch (error) {
            reply.status(500).send({ error: 'Failed to delete family record' });
        }
    });
}
