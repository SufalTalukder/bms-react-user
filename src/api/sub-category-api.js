import { BASE_URLS, handleApi } from "./axios";

const subCategoryApi = handleApi(BASE_URLS.USER);

// FETCH ALL CATEGORIES
export const fetchAllSubCategories = () =>
    subCategoryApi.get("/api/v1/subcategory-list");

// FETCH ALL PRODUCTS BY SUB-CATEGORY ID
export const fetchProductsBySubCategoryId = (data) =>
    subCategoryApi.post("/api/v1/subcategory-wise-products", data);