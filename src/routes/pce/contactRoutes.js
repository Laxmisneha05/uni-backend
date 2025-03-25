import {
    getPCEContacts,
    getPCEContactById,
    addPCEContact,
    updatePCEContact,
    deletePCEContact
  } from '../../services/pce/contactService.js';
  
  export default async function (fastify, options) {
    fastify.get('/contacts', async (req, reply) => {
      return getPCEContacts();
    });
  
    fastify.get('/contacts/:id', async (req, reply) => {
      return getPCEContactById(req.params.id);
    });
  
    fastify.post('/contacts', async (req, reply) => {
      return addPCEContact(req.body);
    });
  
    fastify.put('/contacts/:id', async (req, reply) => {
      return updatePCEContact(req.params.id, req.body);
    });
  
    fastify.delete('/contacts/:id', async (req, reply) => {
      return deletePCEContact(req.params.id);
    });
  }
  