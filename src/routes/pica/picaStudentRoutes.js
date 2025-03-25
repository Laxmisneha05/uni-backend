import { 
  getPICAStudents, 
  getPICAStudentById, 
  addPICAStudent, 
  updatePICAStudent, 
  deletePICAStudent 
} from '../../services/pica/picaStudentService.js';

export default async function (fastify, options) {
  fastify.get('/students', async (req, reply) => {
    const students = await getPICAStudents();
    reply.send(students);
  });

  fastify.get('/students/:id', async (req, reply) => {
    const { id } = req.params;
    const student = await getPICAStudentById(id);
    reply.send(student);
  });

  fastify.post('/students', async (req, reply) => {
    const studentData = req.body;
    const newStudent = await addPICAStudent(studentData);
    reply.code(201).send(newStudent);
  });

  fastify.put('/students/:id', async (req, reply) => {
    const { id } = req.params;
    const studentData = req.body;
    const updatedStudent = await updatePICAStudent(id, studentData);
    reply.send(updatedStudent);
  });

  fastify.delete('/students/:id', async (req, reply) => {
    const { id } = req.params;
    const deletedStudent = await deletePICAStudent(id);
    reply.send(deletedStudent);
  });
}
