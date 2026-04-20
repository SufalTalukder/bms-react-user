import { BASE_URLS, handleApi } from "./axios";

const productApi = handleApi(BASE_URLS.USER);

// FETCH PRODUCT DETAILS BY PRODUCT SLUG
export const fetchProductDetailsByProductSlug = (data) =>
    productApi.post("/api/v1/product-details", data);

// FETCH PRODUCTS BY FEATURED TYPE
export const fetchProductsByFeaturedType = (payload) =>
    productApi.post("/api/v1/fetch-featured-products", payload);