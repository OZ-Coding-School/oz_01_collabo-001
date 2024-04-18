import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import axiosInstance from "../../api/signup/axiosInstance";

const verifyEmailCode = async (data: {
  email: string;
  token: number;
}): Promise<string> => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/business_users/email/verifyemail/",
      data
    );
    return response.data; // 성공 메시지 반환
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // 서버에서 응답한 에러 메시지 반환
      if (error.response) {
        throw new Error(
          error.response.data.message || "Unknown error occurred"
        );
      } else {
        // 네트워크 오류나 기타 오류 메시지 반환
        throw new Error(error.message);
      }
    } else {
      // 예상치 못한 오류 유형
      throw new Error("An unexpected error occurred");
    }
  }
};

export function useVerifyEmailCode() {
  const mutation = useMutation<string, Error, { email: string; token: number }>(
    {
      mutationFn: verifyEmailCode,
      onSuccess: (data: string) => {
        console.log("Email verification successful:", data);
      },
      onError: (error: Error) => {
        console.error("Error verifying email:", error);
      },
    }
  );

  return mutation;
}
