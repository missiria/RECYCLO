import apiClient from '~/api/client';
import { getData } from '~/hooks/hooks';
import FormData from 'isomorphic-form-data';
import { handleDeclaration } from './declaration.services';

jest.mock('~/api/client', () => ({
  post: jest.fn(),
}));

jest.mock('~/hooks/hooks', () => ({
  getData: jest.fn(),
}));

describe('handleDeclaration', () => {
  it('should make a POST request to api and navigate to DeclarationSuccess when the declaration is successfully added', async () => {
    const navigation = { navigate: jest.fn() };
    const setErrors = jest.fn();
    const date = '2023-01-21';
    const time = '10:00';
    const quantity = 100;
    const price = 200;
    const images = ['image1', 'image2'];
    const collectId = 123;
    const responseData = {};
    apiClient.post = jest.fn().mockResolvedValue({ data: responseData });

    await handleDeclaration(date, time, quantity, price, images, collectId, navigation, setErrors);

    expect(apiClient.post).toHaveBeenCalledWith("declarations/add", expect.any(FormData), {
      headers: {
        Authorization: "Bearer 1234",
        "Content-Type": "multipart/form-data",
      },
    });
    expect(navigation.navigate).toHaveBeenCalledWith("DeclarationSuccess");
    expect(setErrors).not.toHaveBeenCalled();
  });
});
