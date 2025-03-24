import db from '../config/knex.js';

export const getPrograms = async () => {
  return await db('users').select('*');
};
