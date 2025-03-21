import { getPICAStudents } from '../services/picaService.js';

export default async function (fastify, options) {
  fastify.get('/pica/students', async (req, reply) => {
    const students = await getPICAStudents();
    reply.send(students);
  });
}
