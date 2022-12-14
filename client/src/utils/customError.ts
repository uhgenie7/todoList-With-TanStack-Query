class CustomError extends Error {
  errorHandler: () => void;

  constructor(message: string, errorHandler: (message: string) => void) {
    super(message);
    this.name = 'Custom Error:';
    this.errorHandler = () => errorHandler(message);
  }

  activateHandler() {
    return this.errorHandler();
  }
}

export default CustomError;
