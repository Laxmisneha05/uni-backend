import pool from '../config/db.js';

export const getPrograms = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};
