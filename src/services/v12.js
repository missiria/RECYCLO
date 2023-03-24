// TODO : Create Test file and some tests
export const setErrorsAPI = (errors) => {
    let errorsAPI = [];
    errors.map((error) => {
        errorsAPI[error.field] = error.message
    })
    return errorsAPI;
}