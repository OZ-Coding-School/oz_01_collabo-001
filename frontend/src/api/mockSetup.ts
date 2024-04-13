import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

console.log("Creating mock adapter");

// axios 인스턴스에 MockAdapter 연결
const mock = new MockAdapter(axiosInstance);

console.log("Setting up mock response");

// 모의 응답 설정
mock.onGet("/api/check-user-id").reply((config) => {
  console.log("Intercepted request with config:", config);

  const params = new URLSearchParams(config.params);
  const userId = params.get("userId");

  console.log(`Received userId: ${userId}`);

  if (userId === "existing_user") {
    return [200, { isValid: false }];
  } else {
    return [200, { isValid: true }];
  }
});

// 모듈에서 axiosInstance 내보내기
export default axiosInstance;
