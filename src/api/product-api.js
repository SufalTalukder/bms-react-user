import { BASE_URLS, handleApi } from "./axios";

const productApi = handleApi(BASE_URLS.USER);

// FETCH PRODUCT DETAILS BY PRODUCT SLUG
export const fetchProductDetailsByProductSlug = (productSlug) =>
    productApi.post("/api/v1/product-details", {
        product_slug: productSlug
    });

// FETCH PRODUCTS BY FEATURED TYPE
export const fetchProductsByFeaturedType = (payload) =>
    productApi.post("/api/v1/fetch-featured-products", payload);