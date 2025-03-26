import { getPrograms } from '../services/publicService.js';

export default async function (fastify, options) {
  fastify.get('/users', async (req, reply) => {
    const programs = await getPrograms();
    reply.send(programs);
  });
}
