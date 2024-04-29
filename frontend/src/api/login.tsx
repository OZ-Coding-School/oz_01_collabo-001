import axios from "axios";

const api = axios.create({
    baseURL: 'http://3.37.128.177/',
});

api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('access');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const login = async (user_id: string, password: string) => {
    try {
        const result = await api.post("/api/v1/business_user/login/", { user_id, password });
        console.log('api 호출', result);
        return result.data.jwt_token;
    } catch (error) {
        throw error;
    }
};

