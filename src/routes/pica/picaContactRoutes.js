import { picaContactValidation } from '../../controllers/pica/picaValidation.js';
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
        const { error, value } = picaContactValidation.validate(req.body);
        if (error) {
            return reply.status(400).send({ error: error.details[0].message });
        }

        return addPICAContact(value);
    });

    fastify.put('/contacts/:id', async (req, reply) => {
        const { error, value } = picaContactValidation.validate(req.body);
        if (error) {
            return reply.status(400).send({ error: error.details[0].message });
        }

        return updatePICAContact(req.params.id, value);
    });

    fastify.delete('/contacts/:id', async (req, reply) => {
        return deletePICAContact(req.params.id);
    });
}
