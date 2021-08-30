export class AppError extends Error {
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
    return new AppError(err.message, 400, code || 'BAD_REQUEST');
  }
}

export const InternalError = (message = 'Internal error') =>
  new AppError(message, 500);
export const BadRequest = (message = 'Bad request') =>
  new AppError(message, 400, 'BAD_REQUEST');
export const NotFound = (message = 'Bad request') =>
  new AppError(message, 404, 'NOT_FOUND');
export const Unauthorized = (message = 'Unauthorized') =>
  new AppError(message, 401, 'UNAUTHORIZED');
export const NotImplemented = (message = 'Not implemented') =>
  new AppError(message, 400, 'NOT_IMPLEMENTED');
