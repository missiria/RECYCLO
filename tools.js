const errors = [
  {
    field: "email",
    message: "required validation failed",
  },
  {
    field: "password",
    message: "required validation failed",
  },
  {
    field: "first_name",
    message: "required validation failed",
  },
  {
    field: "last_name",
    message: "required validation failed",
  },
  {
    field: "phone",
    message: "required validation failed",
  },
  {
    field: "role",
    message: "required validation failed",
  },
];

const setErrorsAPI = (errors) => {
    let errorsAPI = [];
    errors.map((error) => {
        errorsAPI[error.field] = error.message
    })
    return errorsAPI;
}

console.log('Error YUP > ', setErrorsAPI( errors ));