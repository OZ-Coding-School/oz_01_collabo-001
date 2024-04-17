import { useMutation } from "@tanstack/react-query";
import { checkUserId } from "../api/signupUserApi";

function useUserIdCheck() {
  const mutation = useMutation<
    { isValid: boolean; message?: string },
    Error,
    string
  >({
    mutationFn: checkUserId,
    onSuccess: ({ isValid, message }) => {
      console.log(
        `ID 중복 검사 결과: ${
          isValid ? "valid" : "invalid"
        }, Message: ${message}`
      );
    },
    onError: (error: Error) => {
      console.error("ID 중복 검사 중 에러 발생:", error.message);
    },
  });

  return mutation;
}

export default useUserIdCheck;
