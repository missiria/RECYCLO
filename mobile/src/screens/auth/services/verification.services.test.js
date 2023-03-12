import {
  schemaValidation,
  handleUserVerification,
} from "./verification.services";
import apiClient from "~/api/client";
import { storeData } from "../../../hooks/hooks";

jest.mock("~/api/client");
jest.mock("../../../hooks/hooks");

describe("VERIFICATION", () => {
  describe("FORM : Validation", () => {
    it("Return Error Whene Object Is Empty", async () => {
      let user = { n1: "", n2: "", n3: "", n4: "", n5: "" };

      // WHEN
      const result = await schemaValidation.isValid(user);

      // THEN
      expect(result).toBe(false);
    });

    it("Return Error Whene Object Is Note A number", async () => {
      let user = { n1: "a", n2: "b", n3: "c", n4: "d", n5: "f" };

      // WHEN
      const result = await schemaValidation.isValid(user);

      // THEN
      expect(result).toBe(false);
    });

    it("Return object of fields with values when form is valid", async () => {
      let user = { n1: "1", n2: "2", n3: "3", n4: "4", n5: "5" };

      // WHEN
      const result = await schemaValidation.isValid(user);

      // THEN
      expect(result).toBe(true);
    });
  });
  describe("API : Routes", () => {
    it("Should navigate to VerificationSuccess screen when code matches", async () => {
      const values = { n1: 1, n2: 2, n3: 3, n4: 4 };
      const code = 1234;
      const email = "test@example.com";
      const account = "personal";

      const response = {
        data: { id: 1, email: "test@example.com", active: 1, code: "1234" },
        status: 200,
      };
      apiClient.post.mockResolvedValue( response );

      const navigation = { navigate: jest.fn() };
      const setErr = jest.fn();

      await handleUserVerification(values, code, navigation, setErr, email);

      expect(apiClient.post).toHaveBeenCalledWith("verify", { email });
      expect(navigation.navigate).toHaveBeenCalledWith("VerificationSuccess");
    });
    it("calls setErr with error message with incorrect code", async () => {
      const values = { n1: 1, n2: 2, n3: 3, n4: 4 };
      const code = 5678;
      const navigation = { navigate: jest.fn() };
      const setErr = jest.fn();
      const email = "test@example.com";

      await handleUserVerification(values, code, navigation, setErr, email);

      expect(apiClient.post).toHaveBeenCalledWith("verify", { email });
      expect(storeData).toHaveBeenCalledWith("user", {
        active: 1,
        email: "test@example.com",
        code: '1234',
        id: 1,
      });
      expect(navigation.navigate).not.toHaveBeenCalled();
      expect(setErr).toHaveBeenCalledWith({"code": "Code DOESN'T MATCH !"});
    });
  });
});
