import db from '../config/knex.js';

// ✅ Get all students from PCE
export const getPCEStudents = async () => {
  return await db('pce.pce_student').select('*');
};

// ✅ Get a single student from PCE
export const getPCEStudentById = async (id) => {
  const result = await db('pce.pce_student').where({ student_id: id }).first();
  return result || { message: "Student not found" };
};

// ✅ Add a new student
export const addPCEStudent = async (studentData) => {
  const result = await db('pce.pce_student')
    .insert(studentData)
    .returning('*'); // Returns the newly inserted record

  return result[0];
};

// ✅ Update student data
export const updatePCEStudent = async (id, studentData) => {
  const result = await db('pce.pce_student')
    .where({ student_id: id })
    .update(studentData)
    .returning('*');

  return result[0] || { message: "Student not found" };
};

// ✅ Delete student
export const deletePCEStudent = async (id) => {
  const result = await db('pce.pce_student')
    .where({ student_id: id })
    .del()
    .returning('*');

  return result[0] || { message: "Student not found" };
};
