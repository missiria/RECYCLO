import { schemaValidation, handleRegister } from "./verification.services";
import { axiosInstance } from "../../../api/client";
import { storeData } from "../../../hooks/hooks";

jest.mock('../../../api/client');
jest.mock('../../../hooks/hooks');

describe("VERIFICATION", () => {
  describe("FORM : Validation", () => {
    test("Return Error Whene Object Is Empty", async () => {
      let user = { n1: "", n2: "", n3: "", n4: "", n5: "" };

      // WHEN
      const result = await schemaValidation.isValid(user);

      // THEN
      expect(result).toBe(false);
    });

    test("Return Error Whene Object Is Note A number", async () => {
      let user = { n1: "a", n2: "b", n3: "c", n4: "d", n5: "f" };

      // WHEN
      const result = await schemaValidation.isValid(user);

      // THEN
      expect(result).toBe(false);
    });

    test("Return object of fields with values when form is valid", async () => {
      let user = { n1: "1", n2: "2", n3: "3", n4: "4", n5: "5" };

      // WHEN
      const result = await schemaValidation.isValid(user);

      // THEN
      expect(result).toBe(true);
    });
  });
  describe("API : Routes", () => {
    test('Should navigate to VerificationSuccess screen when code matches', async () => {
      const values = { n1: 1, n2: 2, n3: 3, n4: 4 };
      const code = 1234;
      const email = 'test@example.com';
      const account = 'personal';

      const user = { id: 1, email: 'test@example.com', active: 1 };
      axiosInstance.post.mockResolvedValue({ data: user });

      const navigation = { navigate: jest.fn() };
      const setErr = jest.fn();

      await handleRegister(values, code, navigation, setErr, email, account);

      expect(axiosInstance.post).toHaveBeenCalledWith('verify', { email });
      expect(navigation.navigate).toHaveBeenCalledWith('VerificationSuccess', { account });
    });
    test("calls setErr with error message with incorrect code", async () => {
      const values = { n1: 1, n2: 2, n3: 3, n4: 4 };
      const code = 5678;
      const navigation = { navigate: jest.fn() };
      const setErr = jest.fn();
      const email = "test@example.com";
      const account = "personal";

      await handleRegister(values, code, navigation, setErr, email, account);

      expect(axiosInstance.post).toHaveBeenCalledWith("verify", { email });
      expect(storeData).toHaveBeenCalledWith("user", {"active": 1, "email": "test@example.com", "id": 1});
      expect(navigation.navigate).not.toHaveBeenCalled();
      expect(setErr).toHaveBeenCalledWith("Code DOESN'T MATCH !");
    });
  });
});
