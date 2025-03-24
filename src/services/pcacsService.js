import db from '../config/knex.js';

export const getPCACSStudents = async () => {
  return await db('pcacs.pcacs_student').select('*');
};

// ✅ Get a single student from PCACS by ID
export const getPCACSStudentById = async (id) => {
  const result = await db('pcacs.pcacs_student').where({ student_id: id }).first();
  return result || { message: "Student not found" };
};

export const addPCACSStudent = async (studentData) => {
  const result = await db('pcacs.pcacs_student')
    .insert(studentData)
    .returning('*'); // Returns the newly inserted record

  return result[0];
};

// ✅ Update a student in PCACS
export const updatePCACSStudent = async (id, studentData) => {
  const result = await db('pcacs.pcacs_student')
    .where({ student_id: id })
    .update(studentData)
    .returning('*');

  return result[0] || { message: "Student not found" };
};

// ✅ Delete a student from PCACS
export const deletePCACSStudent = async (id) => {
  const result = await db('pcacs.pcacs_student')
    .where({ student_id: id })
    .del()
    .returning('*');

  return result[0] || { message: "Student not found" };
};
