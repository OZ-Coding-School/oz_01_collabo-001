import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import axiosInstance from "../../api/signup/axiosInstance";

const sendEmailVerificationCode = async (email: string): Promise<string> => {
  const data = JSON.stringify({ email });
  try {
    console.log(`sendEmailVerificationCode: email=${email}`);
    const response = await axiosInstance.post(
      "/api/v1/business_users/email/sendemail/", // /api/v1/business_users/email/sendemail/
      data
    );
    console.log(
      `sendEmailVerificationCode: response=${JSON.stringify(response.data)}`
    );
    return response.data; // 성공 메시지 반환
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Detailed error:", JSON.stringify(error.response));
      const errorMessage =
        error.response?.data?.message || "Unknown error occurred";
      throw new Error(errorMessage);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export function useSendVerificationCode() {
  const mutation = useMutation<string, Error, string>({
    mutationFn: sendEmailVerificationCode,
    onSuccess: (data: string) => {
      console.log("useSendVerificationCode: Verification code sent:", data);
    },
    onError: (error: Error) => {
      console.error(
        "useSendVerificationCode : Error sending verification code:",
        error.message
      );
    },
  });
  return mutation;
}
