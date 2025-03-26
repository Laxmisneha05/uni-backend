import Joi from 'joi';

// Contact Details Validation
export const picaContactValidation = Joi.object({
    mobile_student: Joi.string()
        .pattern(/^[0-9]{10}$/) 
        .required()
        .messages({
            'string.pattern.base': 'Invalid student mobile number format.'}),
    mobile_father: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .messages({
            'string.pattern.base': 'Invalid father mobile number format.'
        }),
    mobile_mother: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .messages({
            'string.pattern.base': 'Invalid mother mobile number format.'
        }),
    tel_no: Joi.string()
        .pattern(/^[0-9-]+$/)
        .allow(null, '')
        .messages({
            'string.pattern.base': 'Invalid telephone number format.'
        }),
    email_student: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Invalid email format.',
            'any.required': 'Student email is required.'
        }),
    
    address_postal: Joi.string().min(5).required(),
    permanent_address: Joi.string().min(5).required()
});

