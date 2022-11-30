export default class AppError extends Error {
  private ok: boolean;
  private msg: string;
  private statusCode: number;
  private status: string;
  private isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);

    this.ok = true;
    this.msg = message;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
