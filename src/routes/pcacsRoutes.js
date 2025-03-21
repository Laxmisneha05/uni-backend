import { getPCACSStudents } from '../services/pcacsService.js';

export default async function (fastify, options) {
  fastify.get('/pcacs/students', async (req, reply) => {
    const students = await getPCACSStudents();
    reply.send(students);
  });
}
