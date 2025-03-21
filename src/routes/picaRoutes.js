import { 
  getPICAStudents, 
  getPICAStudentById, 
  addPICAStudent, 
  updatePICAStudent, 
  deletePICAStudent 
} from '../services/picaService.js';

export default async function (fastify, options) {
  fastify.get('/pica/students', async (req, reply) => {
    const students = await getPICAStudents();
    reply.send(students);
  });

  fastify.get('/pica/students/:id', async (req, reply) => {
    const { id } = req.params;
    const student = await getPICAStudentById(id);
    reply.send(student);
  });

  fastify.post('/pica/students', async (req, reply) => {
    const studentData = req.body;
    const newStudent = await addPICAStudent(studentData);
    reply.code(201).send(newStudent);
  });

  fastify.put('/pica/students/:id', async (req, reply) => {
    const { id } = req.params;
    const studentData = req.body;
    const updatedStudent = await updatePICAStudent(id, studentData);
    reply.send(updatedStudent);
  });

  fastify.delete('/pica/students/:id', async (req, reply) => {
    const { id } = req.params;
    const deletedStudent = await deletePICAStudent(id);
    reply.send(deletedStudent);
  });
}
