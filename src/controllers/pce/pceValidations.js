import Joi from 'joi';

// Validation schema for mobile numbers and emails
export const pceContactValidation = Joi.object({
    mobile_student: Joi.string().pattern(/^[0-9]{10}$/).required()
        .messages({ 'string.pattern.base': 'Student mobile must be 10 digits' }),

    mobile_father: Joi.string().pattern(/^[0-9]{10}$/).required()
        .messages({ 'string.pattern.base': 'Father mobile must be 10 digits' }),

    mobile_mother: Joi.string().pattern(/^[0-9]{10}$/).required()
        .messages({ 'string.pattern.base': 'Mother mobile must be 10 digits' }),

    email_student: Joi.string().email().required()
        .messages({ 'string.email': 'Invalid student email format' }),

    email_father: Joi.string().email().allow(null, '')
        .messages({ 'string.email': 'Invalid father email format' }),

    email_mother: Joi.string().email().allow(null, '')
        .messages({ 'string.email': 'Invalid mother email format' }),
});
