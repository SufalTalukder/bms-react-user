import { BASE_URLS, handleApi } from "./axios";

const productApi = handleApi(BASE_URLS.USER);

// FETCH PRODUCT DETAILS BY PRODUCT SLUG
export const fetchProductDetailsByProductSlug = (data) =>
    productApi.post("/api/v1/product-details", data);

// FETCH PRODUCTS BY FEATURED TYPE
export const fetchProductsByFeaturedType = (payload) =>
    productApi.post("/api/v1/fetch-featured-products", payload);

// ADD RECENTLY VIEWED PRODUCT
export const addRecentlyViewedProduct = (data) =>
    productApi.post("/api/v1/add-recently-viewed-product", data);

// FETCH RECENTLY VIEWD PRODUCTS
export const fetchRecentlyViewedProducts = (userId) =>
    productApi.post("/api/v1/recently-viewed-products", {
        user_id: userId,
    });

// MANAGE WISHLIST (ADD OR REMOVE)
export const manageWishlist = (data) =>
    productApi.post("/api/v1/manage-wishlist", data);

// FETCH WISHLIST STATUS BY PRODUCT AND USER
export const fetchWishlistStatusByProductAndUser = (data) =>
    productApi.post("/api/v1/fetch-wishlist", data);

// FETCH WISHLIST PRODUCTS BY USER
export const fetchWishlistProductsByUser = (userId) =>
    productApi.post("/api/v1/fetch-all-wishlists", {
        user_id: userId,
    });

// MANAGE CART (ADD, UPDATE OR REMOVE)
export const manageCart = (data) =>
    productApi.post("/api/v1/user/manage-cart", data);

// FETCH CART STATUS BY PRODUCT AND USER
export const fetchCartStatusByProductAndUser = (data) =>
    productApi.post("/api/v1/user/fetch-cart", data);

// FETCH CART PRODUCTS BY USER
export const fetchCartProductsByUser = (userId) =>
    productApi.post("/api/v1/user/fetch-all-carts", {
        user_id: userId,
    });