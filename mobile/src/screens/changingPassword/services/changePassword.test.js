import { axiosInstance } from "../../../api/client";
import { handleAuth, schema } from "./changePassword.services";

jest.mock("../../../api/client", () => ({
  axiosInstance: {
    post: jest.fn(),
  },
}));

describe("CHANGE PASSWORD", () => {
  describe("FORM : Validation", () => {
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
  });

  describe("API : Routes", () => {
    let values, navigation, email, setLoading;

    beforeEach(() => {
      values = { password: "password" };
      navigation = { navigate: jest.fn() };
      email = "email";
      setLoading = jest.fn();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should call axiosInstance.post with correct parameters", async () => {
      await handleAuth(values, navigation, email, setLoading);
      expect(axiosInstance.post).toHaveBeenCalledWith(
        "update_password",
        {
          email,
          password: values.password,
        }
      );
    });

    it("should call setLoading with false if axios call is successful", async () => {
      axiosInstance.post.mockResolvedValue({ data: {} });
      await handleAuth(values, navigation, email, setLoading);
      expect(setLoading).toHaveBeenCalledWith(false);
    });

    it("should call setLoading with false if axios call throws an error", async () => {
      axiosInstance.post.mockRejectedValue(new Error());
      await handleAuth(values, navigation, email, setLoading);
      expect(setLoading).toHaveBeenCalledWith(false);
    });

    it("should navigate to 'Done' if axios call is successful", async () => {
      axiosInstance.post.mockResolvedValue({ data: {} });
      await handleAuth(values, navigation, email, setLoading);
      expect(navigation.navigate).toHaveBeenCalledWith("Done");
    });

    it("should log the error if axios call throws an error", async () => {
      const error = new Error("error message");
      axiosInstance.post.mockRejectedValue(error);
      console.error = jest.fn();
      await handleAuth(values, navigation, email, setLoading);
      expect(console.error).toHaveBeenCalledWith(error);
    });
  });
});
