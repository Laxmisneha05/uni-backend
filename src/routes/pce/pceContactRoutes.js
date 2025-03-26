import {
  getPCEContacts,
  getPCEContactById,
  addPCEContact,
  updatePCEContact,
  deletePCEContact
} from '../../services/pce/pceContactService.js';

export default async function (fastify, options) {
  fastify.get('/contacts', async (req, reply) => {
      try {
          const contacts = await getPCEContacts();
          return reply.send(contacts);
      } catch (error) {
          reply.status(500).send({ error: 'Internal Server Error' });
      }
  });

  fastify.get('/contacts/:id', async (req, reply) => {
      try {
          const contact = await getPCEContactById(req.params.id);
          if (!contact) {
              return reply.status(404).send({ error: 'Contact not found' });
          }
          return reply.send(contact);
      } catch (error) {
          reply.status(500).send({ error: 'Internal Server Error' });
      }
  });

  fastify.post('/contacts', async (req, reply) => {
      try {
          const newContact = await addPCEContact(req.body);
          return reply.status(201).send(newContact);
      } catch (error) {
          reply.status(400).send({ error: error.message }); // Send validation error
      }
  });

  fastify.put('/contacts/:id', async (req, reply) => {
      try {
          const updatedContact = await updatePCEContact(req.params.id, req.body);
          return reply.send(updatedContact);
      } catch (error) {
          reply.status(400).send({ error: error.message }); // Send validation error
      }
  });

  fastify.delete('/contacts/:id', async (req, reply) => {
      try {
          const deleted = await deletePCEContact(req.params.id);
          if (!deleted) {
              return reply.status(404).send({ error: 'Contact not found' });
          }
          return reply.send({ message: 'Contact deleted successfully' });
      } catch (error) {
          reply.status(500).send({ error: 'Internal Server Error' });
      }
  });
}
