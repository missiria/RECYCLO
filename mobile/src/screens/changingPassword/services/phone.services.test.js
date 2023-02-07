import { axiosInstance } from "../../../api/client";
import { schema, VerifyPhone } from "./phone.services";
jest.mock('../../../api/client');

describe('VERIFY PHONE', () => {
  describe('FORM : Validation', () => {
    it("RETURN object of email when retyping is correct", async () => {
      // GIVEN
      const email = { email: "missiria@gmail.com" };

      // WHEN
      const validation = await schema.validate(email);

      // THEN
      expect(validation).toBe(email);
    });
    it("RETURN error when retyping isn't correct", async () => {
      // GIVEN
      const email = { email: "@gmail.com" };

      // WHEN
      const validation = await schema.isValid(email);

      // THEN
      expect(validation).toBe(false);
    });
    it("RETURN error when value is empty", async () => {
      // GIVEN
      const email = { email: "" };

      // WHEN
      const validation = await schema.isValid(email);

      // THEN
      expect(validation).toBe(false);
    });
  })
  describe('API : Routes', () => {
    it('should set loading to true and call the correct API', async () => {
      const setLoading = jest.fn();
      const navigation = { navigate: jest.fn() };
      const email = 'example@email.com';

      axiosInstance.post.mockResolvedValue({ data: { code: '123456' } });

      await VerifyPhone({ email }, navigation, setLoading);

      expect(setLoading).toHaveBeenCalledWith(true);
      expect(axiosInstance.post).toHaveBeenCalledWith('forget_password', { email });
      expect(navigation.navigate).toHaveBeenCalledWith('VerifyPhone', { email, code: '123456' });
      expect(setLoading).toHaveBeenCalledWith(false);
    });

    it('should not navigate when data is not present', async () => {
      const setLoading = jest.fn();
      const navigation = { navigate: jest.fn() };
      const email = 'example@email.com';

      axiosInstance.post.mockResolvedValue({});

      await VerifyPhone({ email }, navigation, setLoading);

      expect(setLoading).toHaveBeenCalledWith(true);
      expect(axiosInstance.post).toHaveBeenCalledWith('forget_password', { email });
      expect(navigation.navigate).not.toHaveBeenCalled();
      expect(setLoading).toHaveBeenCalledWith(false);
    });

    it('should not navigate when navigation is not present', async () => {
      const setLoading = jest.fn();
      const email = 'example@email.com';

      axiosInstance.post.mockResolvedValue({ data: { code: '123456' } });

      await VerifyPhone({ email }, undefined, setLoading);

      expect(setLoading).toHaveBeenCalledWith(true);
      expect(axiosInstance.post).toHaveBeenCalledWith('forget_password', { email });
      expect(setLoading).toHaveBeenCalledWith(false);
    });
  })
});