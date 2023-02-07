import { schema, handleRegister } from "./register.services";
import { storeData } from "~/hooks/hooks";
import { axiosInstance } from "../../../api/client";
import { setErrorsAPI } from "../../../services/v12";

jest.mock("~/hooks/hooks");
jest.mock("../../../api/client");
jest.mock("../../../services/v12");

const axiosInstanceMock = {
  post: jest.fn(),
};

axiosInstance.mockImplementation(() => axiosInstanceMock);

const setErrorsAPIMock = jest.fn();
setErrorsAPI.mockImplementation(() => setErrorsAPIMock);

const storeDataMock = jest.fn();
storeData.mockImplementation(() => storeDataMock);

const userData = {
  first_name: "John",
  last_name: "Doe",
  phone: "05 1234567890",
  email: "johndoe@mail.com",
  password: "password",
  type: "COLLECTOR",
};
const navigationMock = {
  navigate: jest.fn(),
};
const setErrorsMock = jest.fn();
const setAuthLoadedMock = jest.fn();

describe("REGISTER", () => {
  describe('FORM : Validation', () => {
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
  describe('API : routes', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    beforeEach(() => {
      navigation = { navigate: jest.fn() };
      setErrors = jest.fn();
      setAuthLoaded = jest.fn();
      response = {
        data: {
          id: '1',
          email: 'test@example.com',
          code: '123456',
          account: 'COLLECTOR',
        },
        status: 200,
      };
      axiosInstance.post.mockResolvedValue(response);
    });

    it('should call navigate with correct params when response id is greater than 0', async () => {
      await handleRegister(userData, navigation, setErrors, setAuthLoaded);

      expect(navigation.navigate).toHaveBeenCalledWith(
        'VerificationUser',
        { email: response.data.email, code: response.data.code, account: response.data.account }
      );
    });

    it("should call setAuthLoaded with true", async () => {
      await handleRegister(userData, navigationMock, setErrorsMock, setAuthLoadedMock);

      expect(setAuthLoadedMock).toHaveBeenCalledWith(true);
    });

    it("should call axiosInstance post method with correct params", async () => {
      await handleRegister(userData, navigationMock, setErrorsMock, setAuthLoadedMock);

      expect(axiosInstanceMock.post).toHaveBeenCalledWith("users", userData, {
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
      });
    });

    it("should call setErrors with response.data.errors when response status is 422", async () => {
      const response = {
        status: 422,
        data: {
          errors: "error",
        },
      };
      axiosInstanceMock.post.mockResolvedValue(response);

      await handleRegister(userData, navigationMock, setErrorsMock, setAuthLoadedMock);

      expect(setErrorsMock).toHaveBeenCalledWith("error");
    });
  })
})

