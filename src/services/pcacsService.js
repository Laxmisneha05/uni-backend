import pool from '../config/db.js';

export const getPCACSStudents = async () => {
  const result = await pool.query('SELECT * FROM pcacs.pcacs_student');
  return result.rows;
};

// ✅ Get a single student from PCACS by ID
export const getPCACSStudentById = async (id) => {
  const result = await pool.query('SELECT * FROM pcacs.pcacs_student WHERE student_id = $1', [id]);
  return result.rows[0] || { message: "Student not found" };
};

export const addPCACSStudent = async (studentData) => {
  const result = await pool.query(
    `INSERT INTO pcacs.pcacs_student 
      (
        login_id, surname, name, father_name, mother_name, dob, gender, place_of_birth, nationality,
        mother_tongue, marital_status, religion, caste, subcaste, employment_status, category,
        blood_group, physically_challenged, ward_of_defense, hobbies, international_games_sports
      ) 
      VALUES 
      (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 
        $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21
      ) 
      RETURNING *`,
    [
      studentData.login_id, 
      studentData.surname, 
      studentData.name, 
      studentData.father_name, 
      studentData.mother_name, 
      studentData.dob, 
      studentData.gender, 
      studentData.place_of_birth, 
      studentData.nationality, 
      studentData.mother_tongue, 
      studentData.marital_status, 
      studentData.religion, 
      studentData.caste, 
      studentData.subcaste, 
      studentData.employment_status, 
      studentData.category, 
      studentData.blood_group, 
      studentData.physically_challenged, 
      studentData.ward_of_defense, 
      studentData.hobbies, 
      studentData.international_games_sports
    ]
  );
  
  return result.rows[0];
};


// ✅ Update a student in PCACS
export const updatePCACSStudent = async (id, studentData) => {
  const result = await pool.query(
    `UPDATE pcacs.pcacs_student 
     SET login_id = $1, surname = $2, name = $3, father_name = $4, mother_name = $5, 
         dob = $6, gender = $7, place_of_birth = $8, nationality = $9, 
         mother_tongue = $10, marital_status = $11, religion = $12, caste = $13, 
         subcaste = $14, employment_status = $15, category = $16, blood_group = $17, 
         physically_challenged = $18, ward_of_defense = $19, hobbies = $20, 
         international_games_sports = $21
     WHERE student_id = $22 
     RETURNING *`,
    [
      studentData.login_id,
      studentData.surname,
      studentData.name,
      studentData.father_name,
      studentData.mother_name,
      studentData.dob,
      studentData.gender,
      studentData.place_of_birth,
      studentData.nationality,
      studentData.mother_tongue,
      studentData.marital_status,
      studentData.religion,
      studentData.caste,
      studentData.subcaste,
      studentData.employment_status,
      studentData.category,
      studentData.blood_group,
      studentData.physically_challenged,
      studentData.ward_of_defense,
      studentData.hobbies,
      studentData.international_games_sports,
      id
    ]
  );
  
  return result.rows[0] || { message: "Student not found" };
};


// ✅ Delete a student from PICA
export const deletePCACSStudent = async (id) => {
  const result = await pool.query('DELETE FROM pcacs.pcacs_student WHERE student_id = $1 RETURNING *', [id]);
  return result.rows[0] || { message: "Student not found" };
};