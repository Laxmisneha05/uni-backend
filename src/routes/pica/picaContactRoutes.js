import {
    getPICAContacts,
    getPICAContactById,
    addPICAContact,
    updatePICAContact,
    deletePICAContact
  } from '../../services/pica/picaContactService.js';
  
  export default async function (fastify, options) {
    fastify.get('/contacts', async (req, reply) => {
      return getPICAContacts();
    });
  
    fastify.get('/contacts/:id', async (req, reply) => {
      return getPICAContactById(req.params.id);
    });
  
    fastify.post('/contacts', async (req, reply) => {
      return addPICAContact(req.body);
    });
  
    fastify.put('/contacts/:id', async (req, reply) => {
      return updatePICAContact(req.params.id, req.body);
    });
  
    fastify.delete('/contacts/:id', async (req, reply) => {
      return deletePICAContact(req.params.id);
    });
  }
  