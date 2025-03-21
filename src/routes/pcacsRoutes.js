import { getPCACSStudents } from '../services/pcacsService.js';

export default async function (fastify, options) {
  fastify.get('/pcacs/students', async (req, reply) => {
    const students = await getPCACSStudents();
    reply.send(students);
  });
  fastify.get('/pce/students/:id', async (req, reply) => {
      return getPCEStudentById(req.params.id);
    });
  
    fastify.post('/pce/students', async (req, reply) => {
      return addPCEStudent(req.body);
    }); 
  
    fastify.put('/pce/students/:id', async (req, reply) => {
      return updatePCEStudent(req.params.id, req.body);
    });
  
    fastify.delete('/pce/students/:id', async (req, reply) => {
      return deletePCEStudent(req.params.id);
    });
}
