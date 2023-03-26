// create custom error for error handling

const createError = (status, msg) => {
  const err = new Error();

  err.status = status;
  err.message = msg;

  return err;
};


export default createError;
