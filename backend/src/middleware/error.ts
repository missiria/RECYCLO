import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../models/error.model';

function handleError(
    err: TypeError | CustomError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    let customError = err;

    if (!(err instanceof CustomError)) {
        customError = new CustomError(
            'Oh no, this is embarrassing. We are having troubles my friend'
        );
    }

    // we are not using the next function to prvent from triggering
    // the default error-handler. However, make sure you are sending a
    // response to client to prevent memory leaks in case you decide to
    // NOT use, like in this example, the NextFunction .i.e., next(new Error())
    res.status((customError as CustomError).status).send(customError);
};

export default handleError;