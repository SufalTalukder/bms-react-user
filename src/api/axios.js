import axios from "axios";

let isRefreshing = false;
let failedQueue = [];

export const BASE_URLS = {
    USER: import.meta.env.VITE_USER_API_BASE,
};

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        error ? prom.reject(error) : prom.resolve(token);
    });
    failedQueue = [];
};

export const applyInterceptors = (instance) => {

    // Request — attach headers matching
    instance.interceptors.request.use(config => {
        const token = sessionStorage.getItem("accessToken");

        if (token) {
            config.headers["accessToken"] = token;
        }

        config.headers["X-API-KEY"] = import.meta.env.VITE_API_KEY;
        config.headers["X-API-TOKEN"] = import.meta.env.VITE_API_SECRET;

        return config;
    });

    // Response — silent token refresh on 401
    instance.interceptors.response.use(
        response => response,
        async error => {
            const originalRequest = error.config;
            const errorCode = error.response?.data?.code;

            if (
                error.response?.status === 401 &&
                errorCode === "ACCESS_TOKEN_EXPIRED" &&
                !originalRequest._retry
            ) {
                if (isRefreshing) {
                    return new Promise((resolve, reject) => {
                        failedQueue.push({ resolve, reject });
                    }).then(token => {
                        originalRequest.headers["accessToken"] = token;
                        return instance(originalRequest);
                    });
                }

                originalRequest._retry = true;
                isRefreshing = true;

                try {
                    const refreshToken = sessionStorage.getItem("refreshToken");

                    if (!refreshToken) throw new Error("No refresh token");

                    const res = await axios.post(
                        `${import.meta.env.VITE_USER_API_BASE}/v1/user/token/refresh`,
                        {},
                        {
                            headers: {
                                "X-API-KEY": import.meta.env.VITE_API_KEY,
                                "X-API-TOKEN": import.meta.env.VITE_API_TOKEN,
                                "refreshToken": refreshToken,
                            }
                        }
                    );

                    const newAccessToken = res.data?.data?.access_token;
                    const newRefreshToken = res.data?.data?.refresh_token;

                    sessionStorage.setItem("accessToken", newAccessToken);
                    sessionStorage.setItem("refreshToken", newRefreshToken);

                    processQueue(null, newAccessToken);
                    originalRequest.headers["accessToken"] = newAccessToken;

                    return instance(originalRequest);

                } catch (err) {
                    processQueue(err, null);
                    sessionStorage.clear();
                    window.location.href = "/bms-book-store";
                    return Promise.reject(err);
                } finally {
                    isRefreshing = false;
                }
            }

            return Promise.reject(error);
        }
    );

    return instance;
};

export const handleApi = (baseURL) => {
    const instance = axios.create({ baseURL, timeout: 15000 });
    return applyInterceptors(instance);
};