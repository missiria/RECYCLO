import { schemaValidation } from "./TransferWithBank.services";

test("Return object of fields with values when form is valid", async () => {
    let user = { 
        bank_name: "Bank Of Africa",
        account_name: "amine amazzal",
        num_rib_bank: "3434343434343434",
        prix: "30",
    };

    // WHEN
    const result = await schemaValidation.isValid(user)

    // THEN
    expect(result).toBe(true)
});


test("Return Error Whene num_rib_bank is not A number", async () => {
    let user = { 
        bank_name: "Bank Of Africa",
        account_name: "amine amazzal",
        num_rib_bank: "this is not a number",
        prix: "30",
    };

    // WHEN
    const result = await schemaValidation.isValid(user)

    // THEN
    expect(result).toBe(false)
});

test("Return Error Whene Objects Is Empty", async () => {
    let user = { 
        bank_name: "",
        account_name: "",
        num_rib_bank: "",
        prix: "",
    };

    // WHEN
    const result = await schemaValidation.isValid(user)

    // THEN
    expect(result).toBe(false)
});