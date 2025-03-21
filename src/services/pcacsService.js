import pool from '../config/db.js';

export const getPCACSStudents = async () => {
  const result = await pool.query('SELECT * FROM pcacs.pcacs_student');
  return result.rows;
};
