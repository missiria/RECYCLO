import { schema } from "./changePassword.services";

describe('Validation - Password', () => {
  test("ChangePassword - RETURN object of passwords when retyping is correct", async () => {
    // GIVEN
    const password = { password: "123456789", retypePassword: "123456789" };

    // WHEN
    const validation = await schema.validate(password);

    // THEN
    expect(validation).toBe(password);
  });

  test("ChangePassword - RETURN error when retyping isn't correct", async () => {
    // GIVEN
    const password = { password: "123456789", retypePassword: "12345678" };

    // WHEN
    const validation = await schema.isValid(password);

    // THEN
    expect(validation).toBe(false);
  });

  test("ChangePassword - RETURN error when retyping password is empty", async () => {
    // GIVEN
    const password = { password: "123456789", retypePassword: "" };

    // WHEN
    const validation = await schema.isValid(password);

    // THEN
    expect(validation).toBe(false);
  });

  test("ChangePassword - RETURN error when password is empty", async () => {
    // GIVEN
    const password = { retypePassword: "123456789" };

    // WHEN
    const validation = await schema.isValid(password);

    // THEN
    expect(validation).toBe(false);
  });
})