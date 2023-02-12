import axios from 'axios';
import { getData } from '~/hooks/hooks';

jest.mock('axios');
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
      axios.put.mockResolvedValue({ data: {} });
    });

    it('should set loading to true', async () => {
      const userData = { city: 'city', neighborhood: 'neighborhood' };
      const cities = [{ name: 'city', id: 1 }];
      getData.mockResolvedValue({ auth: { type: 'Bearer', token: '1234' } });

      await handleRegister(userData, navigation, setErrors, setLoading, cities);

      expect(setLoading).toHaveBeenCalledWith(true);
    });

    it('should set loading to false after the request', async () => {
      const userData = { city: 'city', neighborhood: 'neighborhood' };
      const cities = [{ name: 'city', id: 1 }];
      getData.mockResolvedValue({ auth: { type: 'Bearer', token: '1234' } });

      await handleRegister(userData, navigation, setErrors, setLoading, cities);

      expect(setLoading).toHaveBeenCalledWith(false);
    });

    it('should call the correct endpoint with correct data', async () => {
      const userData = { city: 'city', neighborhood: 'neighborhood' };
      const cities = [{ name: 'city', id: 1 }];
      getData.mockResolvedValue({ auth: { type: 'Bearer', token: '1234' } });

      await handleRegister(userData, navigation, setErrors, setLoading, cities);

      expect(axios.put).toHaveBeenCalledWith(
        'accounts/update',
        {
          city_id: 1,
          city: 'city',
          address: 'neighborhood'
        },
        { headers: { Authorization: 'Bearer 1234' } }
      );
    });

    it('should navigate to ChooseTypeIdentityConfirmation when there are no errors in the response', async () => {
      const userData = { city: 'city', neighborhood: 'neighborhood' };
      const cities = [{ name: 'city', id: 1 }];
      getData.mockResolvedValue({ auth: { type: 'Bearer', token: '1234' } });

      await handleRegister(userData, navigation, setErrors, setLoading, cities);

      expect(navigation.navigate).toHaveBeenCalledWith('ChooseTypeIdentityConfirmation');
    });
  })

})