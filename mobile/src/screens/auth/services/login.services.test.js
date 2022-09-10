import { handleLogin, schema } from '../services/login.services';

describe('Validation - Sign In', () => {
    test("Return object of fields with values when form is valid", async () => {
        let user = { phone: '0656565656', password: '7895123554' }

        // WHEN
        const result = await schema.isValid(user)

        // THEN
        expect(result).toBe(true)
    });

    test("Return error when password is empty", async () => {
        let user = { phone: 12345678, password: '' }

        // WHEN
        const result = await schema.isValid(user)

        // THEN
        expect(result).toBe(false)
    });

    test("Return error when phone is empty", async () => {
        let user = { phone: '', password: '78987544' }

        // WHEN
        const result = await schema.isValid(user)

        // THEN
        expect(result).toBe(false)
    });

    test("Return error when phone equal of 0000", async () => {
        let user = { phone: '0000', password: '78987544' }

        // WHEN
        const result = await schema.isValid(user)

        // THEN
        expect(result).toBe(false)
    });
})

describe('API auth handles', () => {
    // TODO !
    test.skip('handleLogin - failed with status 500 or 400', async () => {
        // GIVEN
            let login = {
                phone: '0656560552',
            password: 'c++'
        }

        // WHEN
        const response = handleLogin(login, navigation, setErrors, loader);

        // THEN
        expect(response.setErrors.api).toBe('You need to activate your account')
    });
})