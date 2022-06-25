
import { schemaValidation } from '../services/verification.services';

test("Return Error Whene Object Is Empty", async () => {
    let user = { n1: '', n2: '',n3:'',n4:'',n5:'' }

    // WHEN
    const result = await schemaValidation.isValid(user)

    // THEN
    expect(result).toBe(false)
});


test("Return Error Whene Object Is Note A number", async () => {
    let user = { n1: 'a', n2: 'b',n3:'c',n4:'d',n5:'f' }

    // WHEN
    const result = await schemaValidation.isValid(user)

    // THEN
    expect(result).toBe(false)
});


test("Return object of fields with values when form is valid", async () => {
    let user = { n1: '1', n2: '2',n3:'3',n4:'4',n5:'5' }

    // WHEN
    const result = await schemaValidation.isValid(user)

    // THEN
    expect(result).toBe(true)
});