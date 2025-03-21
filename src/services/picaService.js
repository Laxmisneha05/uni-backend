import pool from '../config/db.js';

export const getPICAStudents = async () => {
  const result = await pool.query('SELECT * FROM pica.pica_student');
  return result.rows;
};
