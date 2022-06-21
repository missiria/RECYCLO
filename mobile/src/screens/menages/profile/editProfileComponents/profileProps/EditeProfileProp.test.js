import { schemaValidation } from './EditeProfileProp';

test("Return object of fields with values when form is valid", async () => {
    let user = { 
        first_name: "amine",
        last_name: "amazzal",
        email: "hack@email.com",
        phone: "0691987003",
        country: "maroc",
        city: "agadir",
        code_postal: "80000",
        national: "morocaine",
        cin: "jc9654",
        profession: "fullstack developer",
        berthday_day: "2",
        berthday_month: "1",
        berthday_year: "2005",
        current_password: "amine12345",
        new_password: "testtest",
        confirm_password: "testtest"
    };

    // WHEN
    const result = await schemaValidation.isValid(user)

    // THEN
    expect(result).toBe(true)
});




test("Return Error Whene Is Not A Valide Email", async () => {
    let user = { 
        first_name: "amine",
        last_name: "amazzal",
        email: "erroremail",
        phone: "0691987003",
        country: "maroc",
        city: "agadir",
        code_postal: "80000",
        national: "morocaine",
        cin: "jc9654",
        profession: "fullstack developer",
        berthday_day: "2",
        berthday_month: "1",
        berthday_year: "2005",
        current_password: "amine12345",
        new_password: "testtest",
        confirm_password: "testtest"
    };

    // WHEN
    const result = await schemaValidation.isValid(user)

    // THEN
    expect(result).toBe(false)
});


test("Return Error All Objects  Is Empty", async () => {
    let user = { 
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        code_postal: "",
        national: "",
        cin: "",
        profession: "",
        berthday_day: "",
        berthday_month: "",
        berthday_year: "",
        current_password: "",
        new_password: "",
        confirm_password: ""
    };

    // WHEN
    const result = await schemaValidation.isValid(user)

    // THEN
    expect(result).toBe(false)
});