import { axiosInstance } from "../../../api/client";
import { handleRegister, schema } from "./register.services";
import { setErrorsAPI } from "../../../services/v12";

jest.mock("../../../api/client", () => {
  return {
    axiosInstance: {
      post: jest.fn(),
    },
  };
});

jest.mock("../../../services/v12", () => {
  return {
    setErrorsAPI: jest.fn(),
  };
});

describe("REGISTER", () => {
  describe("FORM : Validation", () => {
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
  });
  describe("API : routes", () => {
    let userData, navigationMock, setErrorsMock, setAuthLoadedMock;

    beforeEach(() => {
      userData = {
        email: "missiria@mail.com",
        password: "c++",
      };
      navigationMock = { navigate: jest.fn() };
      setErrorsMock = jest.fn();
      setAuthLoadedMock = jest.fn();
    });

    afterEach(() => {
      axiosInstance.post.mockClear();
      setErrorsAPI.mockClear();
      navigationMock.navigate.mockClear();
      setErrorsMock.mockClear();
      setAuthLoadedMock.mockClear();
    });

    it("should call axiosInstance.post with correct params", async () => {
      axiosInstance.post.mockResolvedValue({
        status: 201,
        data: {
          email: "missiria@mail.com",
          code: "123456",
          account: { id: 1 },
        },
      });

      await handleRegister(
        userData,
        navigationMock,
        setErrorsMock,
        setAuthLoadedMock
      );

      expect(axiosInstance.post).toHaveBeenCalledWith("users", userData, {
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
      });
    });

    it("should navigate to VerificationUser screen with correct params if the response has a status of 201", async () => {
      axiosInstance.post.mockResolvedValue({
        status: 201,
        data: {
          email: "missiria@mail.com",
          code: "123456",
          account: { id: 1 },
        },
      });

      await handleRegister(
        userData,
        navigationMock,
        setErrorsMock,
        setAuthLoadedMock
      );

      expect(navigationMock.navigate).toHaveBeenCalledWith("VerificationUser", {
        email: "missiria@mail.com",
        code: "123456",
        account: { id: 1 },
      });
    });
  });
});
