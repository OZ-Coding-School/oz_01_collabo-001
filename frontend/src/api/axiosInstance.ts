import axios from "axios";

// axios 인스턴스 생성
const axiosInstance = axios.create({
  // withCredentials: true,
  baseURL: "http://3.37.128.177",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Apply mocks in development environment
// if (import.meta.env.MODE === "development") {
//   console.log("development Setting up mock adapter");
//   setupMocks(axiosInstance);
// }

// 사용자 ID 중복 확인 API 호출 함수
export const checkUserId = async (userId: string): Promise<boolean> => {
  console.log(`checkUserId User ID: ${userId}`);
  const response = await axiosInstance.get(`/api/check-user-id`, {
    params: { userId },
  });
  return response.data.isValid;
};

export default axiosInstance;
