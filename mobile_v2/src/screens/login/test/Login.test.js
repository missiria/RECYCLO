import { schema } from '../services/auth.services';

test("Return object of fields with values when form is valid", async () => {
    let user = { email: 'gg@gg.com', password: '7895123554' }

    const result = await schema.isValid(user)

    expect(result).toBe(true)
});

test("Return error when password is empty", async () => {
    let user = { email: 12345678, password: '' }

    const result = await schema.isValid(user)

    expect(result).toBe(false)
});

test("Return error when email is empty", async () => {
    let user = { email: '', password: '78987544' }

    // WHEN
    const result = await schema.isValid(user)

    // THEN
    expect(result).toBe(false)
});

test("Return error when email equal  is not a valid email", async () => {
    let user = { email: '0000', password: '78987544' }

    // WHEN
    const result = await schema.isValid(user)

    // THEN
    expect(result).toBe(false)
});