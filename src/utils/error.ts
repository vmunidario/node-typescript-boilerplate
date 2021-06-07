export class BfcError extends Error {
  statusCode: number;
  code: string;

  constructor(message: string, statusCode: number, code?: string) {
    super(message);
    this.statusCode = statusCode;
    this.code = code || 'INTERNAL_ERROR';
  }

  static make(error: Error, code?: string) {
    let err = error;
    if (!err) {
      err = InternalError();
    }
    return new BfcError(err.message, 400, code || 'BAD_REQUEST');
  }
}

export const InternalError = (message = 'Internal error') =>
  new BfcError(message, 500);
export const BadRequest = (message = 'Bad request') =>
  new BfcError(message, 400, 'BAD_REQUEST');
export const NotFound = (message = 'Bad request') =>
  new BfcError(message, 404, 'NOT_FOUND');
export const Unauthorized = (message = 'Unauthorized') =>
  new BfcError(message, 401, 'UNAUTHORIZED');
export const NotImplemented = (message = 'Not implemented') =>
  new BfcError(message, 400, 'NOT_IMPLEMENTED');
