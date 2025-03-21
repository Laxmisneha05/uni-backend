import { getPCACSStudents, 
  getPCACSStudentById, 
  addPCACSStudent, 
  updatePCACSStudent, 
  deletePCACSStudent 
} from '../services/pcacsService.js';

export default async function (fastify, options) {
  fastify.get('/pcacs/students', async (req, reply) => {
    const students = await getPCACSStudents();
    reply.send(students);
  });


  fastify.get('/pcacs/students/:id', async (req, reply) => {
    const { id } = req.params;
    const student = await getPCACSStudentById(id);
    reply.send(student);
  });

  fastify.post('/pcacs/students', async (req, reply) => {
    const studentData = req.body;
    const newStudent = await addPCACSStudent(studentData);
    reply.code(201).send(newStudent);
  });

  fastify.put('/pcacs/students/:id', async (req, reply) => {
    const { id } = req.params;
    const studentData = req.body;
    const updatedStudent = await updatePCACSStudent(id, studentData);
    reply.send(updatedStudent);
  });

  fastify.delete('/pcacs/students/:id', async (req, reply) => {
    const { id } = req.params;
    const deletedStudent = await deletePCACSStudent(id);
    reply.send(deletedStudent);
  });
}
