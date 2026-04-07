import { BASE_URLS, handleApi } from "./axios";

const categoryApi = handleApi(BASE_URLS.USER);

// FETCH ALL CATEGORIES
export const fetchAllCategories = () =>
    categoryApi.get("/api/v1/category-list");