class ApiError extends Error {
  constructor(statusCode: string, message: string) {
    super(message);
    this.message = message;
    // this.statusCode = statusCode;
  }
}

export default ApiError;
