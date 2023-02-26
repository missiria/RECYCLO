import * as yup from "yup";
import apiClient from "~/api/client";
import { setErrorsAPI } from "~/services/v12";
import { getData } from "../../../../hooks/hooks";
import { handleUploadId } from "./upload_identity.services";
import FormData from "form-data";

// Mock the getData function to return a user object
jest.mock("../../../../hooks/hooks", () => ({
  getData: jest.fn(() =>
    Promise.resolve({ auth: { type: "Bearer", token: "123" } })
  ),
}));

// Mock the apiClient to return a successful response
jest.mock("~/api/client", () => ({
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

// Mock the setErrorsAPI and navigation functions
jest.mock("~/services/v12", () => ({
  setErrorsAPI: jest.fn(),
}));
const navigation = { navigate: jest.fn() };

describe("handleUploadId", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  // TODO : Verification of FormData
  xit("should upload ID and navigate to VerifyAccount on success", async () => {
    const typeIdentity = "passport";
    const imageRecto = "recto.jpg";
    const imageVerso = "verso.jpg";

    await handleUploadId    (typeIdentity, imageRecto, imageVerso, navigation);

    // Check that getData was called with "user"
    expect(getData).toHaveBeenCalledWith("user");

    // Check that FormData was created correctly
    const formData = new FormData();
    formData.append("type_verification", typeIdentity);
    formData.append("front_card", {
      uri: imageRecto,
      name: "front_card.jpg",
      type: "image/jpg",
    });
    formData.append("back_card", {
      uri: imageVerso,
      name: "back_card.jpg",
      type: "image/jpg",
    });

    // Check that apiClient.post was called with the correct arguments
    expect(apiClient.post).toHaveBeenCalledWith(
      "account/upload_verfication",
      formData,
      {
        headers: {
          Authorization: "Bearer 123",
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // Check that setErrorsAPI and navigation.navigate were not called
    expect(setErrorsAPI).not.toHaveBeenCalled();
    expect(navigation.navigate).toHaveBeenCalledWith("VerifyAccount");
  });

  xit("should set errors if response has errors", async () => {
    const errors = { field: "Error message" };
    apiClient.post.mockReturnValueOnce(Promise.resolve({ data: { errors } }));

    await handleUploadId("id", "recto.jpg", "verso.jpg", navigation);

    // Check that setErrorsAPI was called with the response errors
    expect(setErrorsAPI).toHaveBeenCalledWith(errors);

    // Check that setErrors and navigation.navigate were not called
    expect(apiClient.post).toHaveBeenCalled();
    expect(navigation.navigate).not.toHaveBeenCalled();
  });

  xit("should set errors if response has an error", async () => {
    const error = { message: "Some error message" };
    apiClient.post.mockReturnValueOnce(Promise.resolve({ data: { error } }));

    await handleUploadId("id", "recto.jpg", "verso.jpg", navigation);

    // Check that setErrors was called with the response error message
    expect(setErrorsAPI).not.toHaveBeenCalled();
    expect(setErrors).toHaveBeenCalledWith(error.message);

    // Check that navigation.navigate was not called
    expect(navigation.navigate).not.toHaveBeenCalled();
  });
});
