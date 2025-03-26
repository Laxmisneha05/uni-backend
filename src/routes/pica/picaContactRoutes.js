import {
  getPICAContacts,
  getPICAContactById,
  addPICAContact,
  updatePICAContact,
  deletePICAContact
} from '../../services/pica/picaContactService.js';

// Fastify Schema for Validation
const contactSchema = {
  body: {
      type: 'object',
      required: ['mobile_student', 'email_student', 'address_postal', 'permanent_address'],
      properties: {
          mobile_student: { 
              type: 'string', 
              pattern: '^[0-9]{10}$', // Must be exactly 10 digits
              minLength: 10,
              maxLength: 10
          },
          mobile_father: { 
              type: 'string', 
              pattern: '^[0-9]{10}$',
              nullable: true
          },
          mobile_mother: { 
              type: 'string', 
              pattern: '^[0-9]{10}$',
              nullable: true
          },
          tel_no: {
              type: 'string',
              pattern: '^[0-9-]+$', // Allows numbers and dashes
              nullable: true
          },
          email_student: { 
              type: 'string', 
              format: 'email' // Enforces valid email format
          },
          address_postal: {
              type: 'string',
              minLength: 5
          },
          permanent_address: {
              type: 'string',
              minLength: 5
          }
      }
  }
};

export default async function (fastify, options) {
  fastify.get('/contacts', async (req, reply) => {
      return getPICAContacts();
  });

  fastify.get('/contacts/:id', async (req, reply) => {
      return getPICAContactById(req.params.id);
  });

  fastify.post('/contacts', { schema: contactSchema }, async (req, reply) => {
      // Ensure +91 is added before inserting into DB
      req.body.mobile_student = `+91${req.body.mobile_student}`;
      if (req.body.mobile_father) req.body.mobile_father = `+91${req.body.mobile_father}`;
      if (req.body.mobile_mother) req.body.mobile_mother = `+91${req.body.mobile_mother}`;

      return addPICAContact(req.body);
  });

  fastify.put('/contacts/:id', { schema: contactSchema }, async (req, reply) => {
      // Ensure +91 is added before updating DB
      if (req.body.mobile_student) req.body.mobile_student = `+91${req.body.mobile_student}`;
      if (req.body.mobile_father) req.body.mobile_father = `+91${req.body.mobile_father}`;
      if (req.body.mobile_mother) req.body.mobile_mother = `+91${req.body.mobile_mother}`;

      return updatePICAContact(req.params.id, req.body);
  });

  fastify.delete('/contacts/:id', async (req, reply) => {
      return deletePICAContact(req.params.id);
  });
}
