import { getData } from "../../../hooks/hooks";
import { getCurrentUser } from "./VerificationOtpSuccess.services";

jest.mock("../../../hooks/hooks", () => ({
  getData: jest.fn(),
}));

describe("getCurrentUser", () => {
  afterEach(() => {
    getData.mockClear();
  });

  it("should call getData with the correct key", async () => {
    const setUser = jest.fn();
    const key = "user";

    await getCurrentUser(setUser);

    expect(getData).toHaveBeenCalledWith(key);
  });

  it("should call setUser with the result of getData", async () => {
    const currentUser = { name: "John Doe", email: "johndoe@mail.com" };
    getData.mockResolvedValue(currentUser);
    const setUser = jest.fn();

    await getCurrentUser(setUser);

    expect(setUser).toHaveBeenCalledWith(currentUser);
  });
});