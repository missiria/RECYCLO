import { schema } from "./register.services";

describe('Validation - Sign up', () => {
  test("Return Error When Object Is Empty", async () => {
    let user = { first_name: "", last_name: "", phone: "", password: "" };

    // WHEN
    const result = await schema.isValid(user);

    // THEN
    expect(result).toBe(false);
  });

  test("Return object of fields with values when form is valid", async () => {
    let user = {
      first_name: "amine",
      email: "amine@gmail.com",
      last_name: "amazzal",
      phone: "0691987003",
      password: "amineamazzal",
    };

    // WHEN
    const result = await schema.isValid(user);

    // THEN
    expect(result).toBe(true);
  });

  test("Return Error When Password Is less than 8 characters", async () => {
    let user = {
      first_name: "amine",
      last_name: "amazzal",
      phone: "0691987003",
      password: "ab1",
    };

    // WHEN
    const result = await schema.isValid(user);

    // THEN
    expect(result).toBe(false);
  });

  test("Return Error When Phone Is Not Number", async () => {
    let user = {
      first_name: "amine",
      last_name: "amazzal",
      phone: "lol",
      password: "jfjfjfjfjf",
    };

    // WHEN
    const result = await schema.isValid(user);

    // THEN
    expect(result).toBe(false);
  });
})

