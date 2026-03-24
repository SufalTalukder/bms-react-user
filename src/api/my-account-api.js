import { BASE_URLS, handleApi } from "./axios";

const userApi = handleApi(BASE_URLS.USER);

// FETCH USER API
export const fetchUser = () =>
    userApi.get("/api/v1/user/fetch-details");

// UPDATE USER API
export const updateUser = (data) =>
    userApi.post("/api/v1/user/update-details", data);
