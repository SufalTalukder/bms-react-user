import { BASE_URLS, handleApi } from "./axios";

const languageApi = handleApi(BASE_URLS.USER);

// FETCH ALL CATEGORIES
export const fetchAllLanguages = () =>
    languageApi.get("/api/v1/language-list");