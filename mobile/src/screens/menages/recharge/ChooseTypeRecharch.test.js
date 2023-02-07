import { schemaValidation } from './services/recharge.services'

test("Return object of fields with values when form is valid", async () => {
    let user = {
        operator: "Orange",
        phone: "0612345678",
        amount: "20",
    };

    // WHEN
    const result = await schemaValidation.isValid(user)

    // THEN
    expect(result).toBe(true)
});


test("Return Error When Phone Is Not A Number", async () => {
    let user = {
        operator: "Orange",
        phone: "thisisnotanumber",
        amount: "20",
    };

    // WHEN
    const result = await schemaValidation.isValid(user)

    // THEN
    expect(result).toBe(false)
});

test("Return Error Whene Objects Is Empty", async () => {
    let user = {
        operator: "",
        phone: "",
        amount: "",
    };

    // WHEN
    const result = await schemaValidation.isValid(user)

    // THEN
    expect(result).toBe(false)
});

