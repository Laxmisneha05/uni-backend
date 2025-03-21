import pool from '../config/db.js';

// ✅ Get all students from PCE
export const getPCEStudents = async () => {
  const result = await pool.query('SELECT * FROM pce.pce_student');
  return result.rows;
};

// ✅ Get a single student from PCE
export const getPCEStudentById = async (id) => {
  const result = await pool.query('SELECT * FROM pce.pce_student WHERE student_id = $1', [id]);
  return result.rows[0] || { message: "Student not found" };
};

// ✅ Add a new student
export const addPCEStudent = async (studentData) => {
  const result = await pool.query(
    `INSERT INTO pce.pce_student 
    (login_id, surname, name, father_name, mother_name, dob, gender, nationality, 
     mother_tongue, marital_status, category, religion, caste, sub_caste, program_id, 
     extra_curricular_activity, breaks_in_studies, any_other_information) 
    VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) 
    RETURNING *`,
    [
      studentData.login_id, 
      studentData.surname, 
      studentData.name, 
      studentData.father_name, 
      studentData.mother_name, 
      studentData.dob, 
      studentData.gender, 
      studentData.nationality, 
      studentData.mother_tongue, 
      studentData.marital_status, 
      studentData.category, 
      studentData.religion, 
      studentData.caste, 
      studentData.sub_caste, 
      studentData.program_id, 
      studentData.extra_curricular_activity, 
      studentData.breaks_in_studies, 
      studentData.any_other_information
    ]
  );
  return result.rows[0];
};


// ✅ Update student data
export const updatePCEStudent = async (id, studentData) => {
  const result = await pool.query(
    `UPDATE pce.pce_student 
     SET surname = $1, name = $2, father_name = $3, mother_name = $4, dob = $5, 
         gender = $6, nationality = $7, mother_tongue = $8, marital_status = $9, 
         category = $10, religion = $11, caste = $12, sub_caste = $13, program_id = $14, 
         extra_curricular_activity = $15, breaks_in_studies = $16, any_other_information = $17 
     WHERE student_id = $18 
     RETURNING *`,
    [
      studentData.surname, studentData.name, studentData.father_name, studentData.mother_name, studentData.dob,
      studentData.gender, studentData.nationality, studentData.mother_tongue, studentData.marital_status,
      studentData.category, studentData.religion, studentData.caste, studentData.sub_caste, studentData.program_id,
      studentData.extra_curricular_activity, studentData.breaks_in_studies, studentData.any_other_information, id
    ]
  );
  return result.rows[0] || { message: "Student not found" };
};


// ✅ Delete student
export const deletePCEStudent = async (id) => {
  const result = await pool.query('DELETE FROM pce.pce_student WHERE student_id = $1 RETURNING *', [id]);
  return result.rows[0] || { message: "Student not found" };
};
