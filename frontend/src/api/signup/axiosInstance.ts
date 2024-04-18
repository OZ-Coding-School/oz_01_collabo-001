import axios from "axios";
import { setupMocks } from "./mockSetup";

// axios 인스턴스 생성
const axiosInstance = axios.create({
  // withCredentials: true,
  baseURL: "http://3.37.128.177",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const useMock = import.meta.env.REACT_APP_USE_MOCK_API === "true";
// 개발 환경이고, Mock 사용이 활성화되어 있다면 Mock 설정 적용

if (import.meta.env.MODE === "development" && useMock) {
  setupMocks(axiosInstance);
}

export default axiosInstance;
