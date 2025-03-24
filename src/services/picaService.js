import db from '../config/knex.js';

// ✅ Get all students from PICA
export const getPICAStudents = async () => {
  return await db('pica.pica_student').select('*');
};

// ✅ Get a single student from PICA by ID
export const getPICAStudentById = async (id) => {
  const result = await db('pica.pica_student').where({ student_id: id }).first();
  return result || { message: "Student not found" };
};

// ✅ Add a new student to PICA
export const addPICAStudent = async (studentData) => {
  const result = await db('pica.pica_student')
    .insert(studentData)
    .returning('*'); // Returns the newly inserted record

  return result[0];
};

// ✅ Update a student in PICA
export const updatePICAStudent = async (id, studentData) => {
  const result = await db('pica.pica_student')
    .where({ student_id: id })
    .update(studentData)
    .returning('*');

  return result[0] || { message: "Student not found" };
};

// ✅ Delete a student from PICA
export const deletePICAStudent = async (id) => {
  const result = await db('pica.pica_student')
    .where({ student_id: id })
    .del()
    .returning('*');

  return result[0] || { message: "Student not found" };
};
