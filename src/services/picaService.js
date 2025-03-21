import pool from '../config/db.js';

// ✅ Get all students from PICA
export const getPICAStudents = async () => {
  const result = await pool.query('SELECT * FROM pica.pica_student');
  return result.rows;
};

// ✅ Get a single student from PICA by ID
export const getPICAStudentById = async (id) => {
  const result = await pool.query('SELECT * FROM pica.pica_student WHERE student_id = $1', [id]);
  return result.rows[0] || { message: "Student not found" };
};

// ✅ Add a new student to PICA
export const addPICAStudent = async (studentData) => {
  const result = await pool.query(
    `INSERT INTO pica.pica_student 
    (login_id, first_name, surname, dob, gender, nationality, place_of_birth, 
     mother_tongue, marital_status, other_lang_known, open_category, 
     minority_category, reserved_category, backward_class, award_of_central_govt, 
     program_id, state, foreign_nri, hobbies, employment_status) 
    VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) 
    RETURNING *`,
    [
      studentData.login_id, 
      studentData.first_name, 
      studentData.surname, 
      studentData.dob, 
      studentData.gender, 
      studentData.nationality, 
      studentData.place_of_birth, 
      studentData.mother_tongue, 
      studentData.marital_status, 
      studentData.other_lang_known, 
      studentData.open_category, 
      studentData.minority_category, 
      studentData.reserved_category, 
      studentData.backward_class, 
      studentData.award_of_central_govt, 
      studentData.program_id, 
      studentData.state, 
      studentData.foreign_nri, 
      studentData.hobbies, 
      studentData.employment_status
    ]
  );
  return result.rows[0];
};

// ✅ Update a student in PICA
export const updatePICAStudent = async (id, studentData) => {
  const result = await pool.query(
    `UPDATE pica.pica_student 
     SET login_id = $1, first_name = $2, surname = $3, dob = $4, gender = $5, 
         nationality = $6, place_of_birth = $7, mother_tongue = $8, marital_status = $9, 
         other_lang_known = $10, open_category = $11, minority_category = $12, 
         reserved_category = $13, backward_class = $14, award_of_central_govt = $15, 
         program_id = $16, state = $17, foreign_nri = $18, hobbies = $19, 
         employment_status = $20
     WHERE student_id = $21 
     RETURNING *`,
    [
      studentData.login_id, 
      studentData.first_name, 
      studentData.surname, 
      studentData.dob, 
      studentData.gender, 
      studentData.nationality, 
      studentData.place_of_birth, 
      studentData.mother_tongue, 
      studentData.marital_status, 
      studentData.other_lang_known, 
      studentData.open_category, 
      studentData.minority_category, 
      studentData.reserved_category, 
      studentData.backward_class, 
      studentData.award_of_central_govt, 
      studentData.program_id, 
      studentData.state, 
      studentData.foreign_nri, 
      studentData.hobbies, 
      studentData.employment_status,
      id
    ]
  );
  return result.rows[0] || { message: "Student not found" };
};

// ✅ Delete a student from PICA
export const deletePICAStudent = async (id) => {
  const result = await pool.query('DELETE FROM pica.pica_student WHERE student_id = $1 RETURNING *', [id]);
  return result.rows[0] || { message: "Student not found" };
};
