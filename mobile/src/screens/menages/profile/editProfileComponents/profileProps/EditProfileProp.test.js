import { schemaValidation } from '../../services/editProfile.services'

test("Return object of fields with values when form is valid", async () => {
  let user = {
    first_name: "amine",
    last_name: "amazzal",
    email: "hack@email.com",
    phone: "0691987003",
    country: "Maroc",
    city: "Agadir",
    code_postal: "80000",
    national: "morocco",
    cin: "jc9654",
    profession: "fullstack developer",
    birthday_day: "2",
    birthday_month: "1",
    birthday_year: "2005",
    current_password: "amine12345",
    new_password: "testtest",
    confirm_password: "testtest",
  };

  // WHEN
  const result = await schemaValidation.isValid(user);

  // THEN
  expect(result).toBe(true);
});

test("Return Error When Is Not A Valid Email", async () => {
  let user = {
    first_name: "amine",
    last_name: "amazzal",
    email: "erroremail",
    phone: "0691987003",
    country: "Maroc",
    city: "Agadir",
    code_postal: "80000",
    national: "morocco",
    cin: "jc9654",
    profession: "fullstack developer",
    birthday_day: "2",
    birthday_month: "1",
    birthday_year: "2005",
    current_password: "amine12345",
    new_password: "testtest",
    confirm_password: "testtest",
  };

  // WHEN
  const result = await schemaValidation.isValid(user);

  // THEN
  expect(result).toBe(false);
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
    birthday_day: "",
    birthday_month: "",
    birthday_year: "",
    current_password: "",
    new_password: "",
    confirm_password: "",
  };

  // WHEN
  const result = await schemaValidation.isValid(user);

  // THEN
  expect(result).toBe(false);
});
