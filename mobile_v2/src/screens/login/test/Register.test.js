import { schema } from '../services/register.services';

test("Return Error When Object Is Empty", async () => {
    let user = { name: '', lastName: '',phone : '456456456', email:'',password:'' }

    const result = await schema.isValid(user)

    expect(result).toBe(false)
});

test("Return object of fields with values when form is valid", async () => {
    let user = { name: 'amine',lastName: 'amazzal',phone : '456456456',  email:'hwlo@gg.com',password:'amineamazzal' }

    const result = await schema.isValid(user)

    expect(result).toBe(true);
});

test("Return Error When Password Is less than 8 characters", async () => {
    let user = { name: 'amine', lastName: 'amazzal',phone : '456456456',  email:'hwlo@gg.com', password:'ab1' }

    const result = await schema.isValid(user)

    expect(result).toBe(false);
});

test("Return Error When email Is Not valid email", async () => {
    let user = { name: 'amine', lastName: 'amazzal',phone : '456456456', email:'lol',password:'jfjfjfjfjf' }

    const result = await schema.isValid(user)

    expect(result).toBe(false);
});