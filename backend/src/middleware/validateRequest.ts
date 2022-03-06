import { Request, NextFunction } from 'express';

const validateRequest = function validateRequest(req:Request, next:NextFunction, schema:any) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        next(`Validation error: ${error.details.map((detail:any) => detail.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}

export default validateRequest;