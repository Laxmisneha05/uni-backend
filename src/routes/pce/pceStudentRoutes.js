import {
  getPCEStudents,
  getPCEStudentById,
  addPCEStudent,
  updatePCEStudent,
  deletePCEStudent
} from '../../services/pce/pceStudentService.js';

export default async function (fastify, options) {
  fastify.get('/students', async (req, reply) => {
    return getPCEStudents();
  });

  fastify.get('/students/:id', async (req, reply) => {
    return getPCEStudentById(req.params.id);
  });

  fastify.post('/students', async (req, reply) => {
    return addPCEStudent(req.body);
  });

  fastify.put('/students/:id', async (req, reply) => {
    return updatePCEStudent(req.params.id, req.body);
  });

  fastify.delete('/students/:id', async (req, reply) => {
    return deletePCEStudent(req.params.id);
  });
}
