import { BASE_URLS, handleApi } from "./axios";

const userApi = handleApi(BASE_URLS.USER);

// FETCH USER
export const fetchUser = () =>
    userApi.get("/api/v1/user/fetch-details");

// UPDATE USER
export const updateUser = (data) =>
    userApi.post("/api/v1/user/update-details", data);

// FETCH ALL USER ADDRESSES
export const fetchAllAddresses = () =>
    userApi.get("/api/v1/user/fetch-addresses-list");

// FETCH USER ADDRESS DETAILS
export const fetchAddressDetails = (user_address_id) =>
    userApi.post("/api/v1/user/fetch-address-details", { user_address_id });

// ADD OR UPDATE ADDRESS
export const addUpdateAddress = (data, user_address_id = null) =>
    userApi.post(
        "/api/v1/user/add-update-address",
        user_address_id ? { ...data, user_address_id } : data
    );

// DELETE ADDRESS
export const deleteAddress = (user_address_id) =>
    userApi.post("/api/v1/user/delete-address", { user_address_id });