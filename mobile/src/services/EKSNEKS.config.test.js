import Config from "./EKSNEKS.config";
import { getData } from "../hooks/hooks";
import { toCapitalizeCase } from "./EKSNEKS.string";

jest.mock("../hooks/hooks");

describe("Config", () => {
  const mockedUser = {
    auth: {
      type: "bearer",
      token: "abc123",
    },
    email: "test@eksneks.com",
  };

  beforeEach(() => {
    getData.mockResolvedValue(mockedUser);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("init method", () => {
    it("should set user property to value returned by getData", async () => {
      // GIVE
      // WHEN
      await Config.init();

      // THEN
      expect(Config.user).toEqual(mockedUser);
    });
  });

  describe("getToken method", () => {
    it("should return formatted token if user auth type is bearer", async () => {
      // GIVE
      // WHEN
      const token = await Config.getToken();

      // THEN
      expect(token).toEqual(
        `${toCapitalizeCase(mockedUser.auth.type)} ${mockedUser.auth.token}`
      );
    });

    it("should return false if user auth type is not bearer", async () => {
      // GIVE
      mockedUser.auth.type = "basic";

      // WHEN
      const token = await Config.getToken();

      // THEN
      expect(token).toBeFalsy();
    });
  });

  describe("getUserEmail method", () => {
    it("should return user email if it exists", async () => {
      // GIVE
      // WHEN
      const email = await Config.getUserEmail();

      // THEN
      expect(email).toEqual(mockedUser.email);
    });

    it("should return false if user email does not exist", async () => {
      // GIVEN
      mockedUser.email = null;

      // WHEN
      const email = await Config.getUserEmail();

      // THEN
      expect(email).toBeFalsy();
    });
  });
});
