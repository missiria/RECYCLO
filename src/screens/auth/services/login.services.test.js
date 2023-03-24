import { handleLogin, schema } from "../services/login.services";
import apiClient from "~/api/client";
import { storeData } from "~/hooks/hooks";

jest.mock("~/api/client");
jest.mock("~/hooks/hooks");

describe("LOGIN", () => {
  describe("FORM : Validation", () => {
    it("Return object of fields with values when form is valid", async () => {
      let user = { phone: "0656565656", password: "7895123554" };

      // WHEN
      const result = await schema.isValid(user);

      // THEN
      expect(result).toBe(true);
    });

    it("Return error when password is empty", async () => {
      let user = { phone: 12345678, password: "" };

      // WHEN
      const result = await schema.isValid(user);

      // THEN
      expect(result).toBe(false);
    });

    it("Return error when phone is empty", async () => {
      let user = { phone: "", password: "78987544" };

      // WHEN
      const result = await schema.isValid(user);

      // THEN
      expect(result).toBe(false);
    });

    it("Return error when phone equal of 0000", async () => {
      let user = { phone: "0000", password: "78987544" };

      // WHEN
      const result = await schema.isValid(user);

      // THEN
      expect(result).toBe(false);
    });
  });
  describe("API : Routes", () => {
    let userData, navigation, setErrors, setAuthLoaded;

    beforeEach(() => {
      userData = {
        email: "test@example.com",
        password: "password123",
      };
      navigation = {
        navigate: jest.fn(),
      };
      setErrors = jest.fn();
      setAuthLoaded = jest.fn();
    });

    it("calls apiClient with the correct data and navigates to VerificationUser if response is inactive", async () => {
      apiClient.post.mockResolvedValue({
        status: 200,
        data: {
          active: 0,
          email: "test@example.com",
        },
      });

      await handleLogin(userData, navigation, setErrors, setAuthLoaded);

      expect(apiClient.post).toHaveBeenCalledWith("users/login", userData);
      expect(navigation.navigate).toHaveBeenCalledWith("VerificationUser", {
        email: "test@example.com",
      });
      expect(setErrors).not.toHaveBeenCalled();
      expect(setAuthLoaded).toHaveBeenCalledWith(false);
    });

    it("calls setErrors with the API error message if the response is not successful", async () => {
      apiClient.post.mockResolvedValue({
        status: 400,
        data: "Bad request",
      });

      await handleLogin(userData, navigation, setErrors, setAuthLoaded);

      expect(apiClient.post).toHaveBeenCalledWith("users/login", userData);
      expect(navigation.navigate).not.toHaveBeenCalled();
      expect(setErrors).toHaveBeenCalledWith({ api: "Bad request" });
      expect(setAuthLoaded).toHaveBeenCalledWith(false);
    });

    it("should set the errors if response status is 400 or 500", async () => {
      const userData = { email: "missiria@email.com", password: "testpassword" };
      const navigation = { navigate: jest.fn() };
      const setErrors = jest.fn();
      const setAuthLoaded = jest.fn();
      apiClient.post.mockResolvedValue({
        status: 400,
        data: "Error occurred"
      });

      await handleLogin(userData, navigation, setErrors, setAuthLoaded);

      expect(setErrors).toHaveBeenCalledWith({ api: "Error occurred" });
      expect(navigation.navigate).not.toHaveBeenCalled();
    });

    it("should navigate to VerificationUser if response.data.active is 0", async () => {
      const userData = { email: "missiria@email.com", password: "testpassword" };
      const navigation = { navigate: jest.fn() };
      const setErrors = jest.fn();
      const setAuthLoaded = jest.fn();
      apiClient.post.mockResolvedValue({
        status: 200,
        data: { active: 0, email: "missiria@email.com" },
      });

      await handleLogin(userData, navigation, setErrors, setAuthLoaded);

      expect(navigation.navigate).toHaveBeenCalledWith("VerificationUser", {
        email: "missiria@email.com",
      });
      expect(setErrors).not.toHaveBeenCalled();
    });

    it("should navigate to Address if response.data.account.address is empty", async () => {
      const userData = { email: "missiria@email.com", password: "testpassword" };
      const navigation = { navigate: jest.fn() };
      const setErrors = jest.fn();
      const setAuthLoaded = jest.fn();
      apiClient.post.mockResolvedValue({
        status: 200,
        data: {
          id: 1,
          active: 1,
          type: "COLLECTOR",
          account: { address: "" },
        },
      });

      await handleLogin(userData, navigation, setErrors, setAuthLoaded);

      expect(navigation.navigate).toHaveBeenCalledWith("Address");
      expect(setErrors).not.toHaveBeenCalled();
    });

    it("should set errors if response data type is neither MENAGE nor COLLECTOR", async () => {
      const userData = { email: "missiria@email.com", password: "testpassword" };
      const navigation = { navigate: jest.fn() };
      const setErrors = jest.fn();
      const setAuthLoaded = jest.fn();
      apiClient.post.mockResolvedValue({
        status: 200,
        data: {
          id: 1,
          active: 1,
          type: "INVALID_TYPE",
          account: { address: "Luxus 154" },
        },
      });

      await handleLogin(userData, navigation, setErrors, setAuthLoaded);

      expect(navigation.navigate).not.toHaveBeenCalled();
      expect(setErrors).toHaveBeenCalledWith({
        api: "ERROR : You should contact the support !",
      });
    });
  });
});
