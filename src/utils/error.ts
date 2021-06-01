
export class BfcError extends Error {

  statusCode: number;

  constructor(message:string, statusCode:number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const InternalError = (message = 'Internal error') => new BfcError(message, 500);
export const BadRequest = (message = 'Bad request') => new BfcError(message, 400);
export const NotFound = (message = 'Bad request') => new BfcError(message, 404);
export const Unauthorized = (message = 'Unauthorized') => new BfcError(message, 401);
export const NotImplemented = (message = 'Not implemented') => new BfcError(message, 400);
