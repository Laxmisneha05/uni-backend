import {
    getPrograms,
    getProgramById,
    addProgram,
    updateProgram,
    deleteProgram
} from '../../services/pica/picaProgramService.js';

export default async function (fastify, options) {
    // Get all programs
    fastify.get('/pica-programs', async (req, reply) => {
        try {
            const programs = await getPrograms();
            reply.send(programs);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to fetch programs' });
        }
    });

    // Get program by ID
    fastify.get('/pica-programs/:id', async (req, reply) => {
        try {
            const program = await getProgramById(req.params.id);
            if (!program) return reply.status(404).send({ error: 'Program not found' });
            reply.send(program);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to fetch program' });
        }
    });

    // Add new program
    fastify.post('/pica-programs', async (req, reply) => {
        try {
            const newProgram = await addProgram(req.body);
            reply.status(201).send(newProgram);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to add program' });
        }
    });

    // Update program
    fastify.put('/pica-programs/:id', async (req, reply) => {
        try {
            const updatedProgram = await updateProgram(req.params.id, req.body);
            if (!updatedProgram) return reply.status(404).send({ error: 'Program not found' });
            reply.send(updatedProgram);
        } catch (error) {
            reply.status(500).send({ error: 'Failed to update program' });
        }
    });

    // Delete program
    fastify.delete('/pica-programs/:id', async (req, reply) => {
        try {
            const deleted = await deleteProgram(req.params.id);
            if (!deleted) return reply.status(404).send({ error: 'Program not found' });
            reply.send({ message: 'Program deleted successfully' });
        } catch (error) {
            reply.status(500).send({ error: 'Failed to delete program' });
        }
    });
}
