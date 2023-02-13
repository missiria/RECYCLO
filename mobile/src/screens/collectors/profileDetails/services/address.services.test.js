import axiosInstance from '../../../../api/client';
import { getData } from "../../../../hooks/hooks";
import { handleAddressRegister, schema } from './address.services';

jest.mock("../../../../api/client");
jest.mock('~/hooks/hooks');

describe('COLLECTOR ADDRESS', () => {
  describe('FORM : Validation', () => {
    it("RETURN object of neighborhood, city when retyping is correct", async () => {
      // GIVEN
      const address = { neighborhood: "Riad salam", city: "Agadir" };

      // WHEN
      const validation = await schema.validate(address);

      // THEN
      expect(validation).toBe(address);
    });
  })
  describe('API : Routes', () => {
    const setLoading = jest.fn();
    const setErrors = jest.fn();
    const navigation = { navigate: jest.fn() };

    beforeEach(() => {
      jest.clearAllMocks();
      axiosInstance.put.mockResolvedValue({ data: {} });
    });

    it('should set loading to true', async () => {
      const userData = { city: 'city', neighborhood: 'neighborhood' };
      const cities = [{ name: 'city', id: 1 }];
      getData.mockResolvedValue({ auth: { type: 'Bearer', token: '1234' } });

      await handleAddressRegister(userData, navigation, setErrors, setLoading, cities);

      expect(setLoading).toHaveBeenCalledWith(true);
    });

    it('should set loading to false after the request', async () => {
      const userData = { city: 'city', neighborhood: 'neighborhood' };
      const cities = [{ name: 'city', id: 1 }];
      getData.mockResolvedValue({ auth: { type: 'Bearer', token: '1234' } });

      await handleAddressRegister(userData, navigation, setErrors, setLoading, cities);

      expect(setLoading).toHaveBeenCalledWith(false);
    });

    // TODO : Fix issue of this test
    xit("should make a PUT request to accounts/update and navigate to ChooseTypeIdentityConfirmation when the address is successfully updated", async () => {
      const userData = { city: "London", neighborhood: "Brixton" };
      const navigation = { navigate: jest.fn() };
      const setErrors = jest.fn();
      const setLoading = jest.fn();
      const cities = [{ id: 1, name: "London" }];
      const user = { auth: { type: "Bearer", token: "1234" } };
      getData.mockResolvedValue(user);
      axiosInstance.put.mockResolvedValue({ data: {} });

      await handleAddressRegister(
        userData,
        navigation,
        setErrors,
        setLoading,
        cities
      );

      expect(setLoading).toHaveBeenCalledWith(true);
      expect(getData).toHaveBeenCalledWith("user");
      expect(axiosInstance.put).toHaveBeenCalledWith(
        "accounts/update",
        {
          city_id: 1,
          city: "London",
          address: "Brixton",
        },
        {
          headers: {
            Authorization: "Bearer 1234",
          },
        }
      );
      expect(navigation.navigate).toHaveBeenCalledWith(
        "ChooseTypeIdentityConfirmation"
      );
      expect(setLoading).toHaveBeenCalledWith(false);
      expect(setErrors).not.toHaveBeenCalled();
    });
  })

})