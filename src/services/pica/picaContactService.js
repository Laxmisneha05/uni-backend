import knex from '../../config/knex.js'; // Ensure db.js is your Knex instance

// Get all contact details
export const getPICAContacts = async () => {
    return await knex('pica.contact_details').select('*');
};

// Get contact details by ID
export const getPICAContactById = async (contact_id) => {
    return await knex('pica.contact_details').where({ contact_id }).first();
};

// Add new contact details
// Add new contact details with validation
export const addPICAContact = async (data) => {
    if (!/^\d{10}$/.test(data.mobile_student)) {
        throw new Error('Invalid student mobile number. Must be 10 digits.');
    }
    if (data.mobile_father && !/^\d{10}$/.test(data.mobile_father)) {
        throw new Error('Invalid father mobile number. Must be 10 digits.');
    }
    if (data.mobile_mother && !/^\d{10}$/.test(data.mobile_mother)) {
        throw new Error('Invalid mother mobile number. Must be 10 digits.');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email_student)) {
        throw new Error('Invalid email format.');
    }

    // Prepend +91 for mobile numbers
    data.mobile_student = `+91${data.mobile_student}`;
    if (data.mobile_father) data.mobile_father = `+91${data.mobile_father}`;
    if (data.mobile_mother) data.mobile_mother = `+91${data.mobile_mother}`;

    return await knex('pica.contact_details').insert(data).returning('*');
};


// Update contact details with validation
export const updatePICAContact = async (contact_id, data) => {
    if (data.mobile_student && !/^\d{10}$/.test(data.mobile_student)) {
        throw new Error('Invalid student mobile number. Must be 10 digits.');
    }
    if (data.mobile_father && !/^\d{10}$/.test(data.mobile_father)) {
        throw new Error('Invalid father mobile number. Must be 10 digits.');
    }
    if (data.mobile_mother && !/^\d{10}$/.test(data.mobile_mother)) {
        throw new Error('Invalid mother mobile number. Must be 10 digits.');
    }
    if (data.email_student && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email_student)) {
        throw new Error('Invalid email format.');
    }

    // Prepend +91 for mobile numbers
    if (data.mobile_student) data.mobile_student = `+91${data.mobile_student}`;
    if (data.mobile_father) data.mobile_father = `+91${data.mobile_father}`;
    if (data.mobile_mother) data.mobile_mother = `+91${data.mobile_mother}`;

    return await knex('pica.contact_details').where({ contact_id }).update(data).returning('*');
};

// Delete contact details
export const deletePICAContact = async (contact_id) => {
    return await knex('pica.contact_details').where({ contact_id }).del();
};
