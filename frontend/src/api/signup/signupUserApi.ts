import axios from "axios";
import { CountryCode, UserSignupData } from "../../interface/signup/types";
import axiosInstance from "./axiosInstance";

// 사용자 ID 중복 확인 API 호출 함수

export const checkUserId = async (
  userId: string
): Promise<{ isValid: boolean; message?: string }> => {
  try {
    console.log(`1. api checkUserId----User ID: ${userId}`);
    const response = await axiosInstance.post(
      `/api/v1/business_user/checkid/`,
      { user_id: userId }
    );
    console.log(`2. api checkUserId----response.data: ${response.data}`);
    // 성공적으로 ID 사용 가능한 경우
    return {
      isValid: response.data.message === "This ID is available for use",
      message: response.data.message,
    };
  } catch (error) {
    console.error(`3. api checkUserId----Error checking user ID: ${error}`);
    // 서버에서 에러 메시지를 반환하는 경우
    if (axios.isAxiosError(error) && error.response) {
      return { isValid: false, message: error.response.data.message };
    }
    // 기타 네트워크 에러 등의 경우
    throw new Error("Network error or invalid response");
  }
};

// 회원가입 국가 코드 목록 조회 API 호출 함수
export const getCountryCodes = async (): Promise<CountryCode[]> => {
  try {
    const response = await axiosInstance.get(
      "/api/v1/Country/select/en/number/"
    );
    console.log("api Country codes response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching country codes:", error);
    throw new Error("Error fetching country codes");
  }
};

// 회원가입 API 호출 함수

export const signupUser = async (
  userData: UserSignupData
): Promise<{ message?: string } | undefined> => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/business_user/signup/",
      userData
    );
    console.log("api[signupUser] ---- userData:", userData);
    console.log("api[signupUser] ---- response.data:", response.data);
    return response.data;
  } catch (error) {
    console.error("api[signupUser] ---- Error fetching:", error);
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }
  }
};
