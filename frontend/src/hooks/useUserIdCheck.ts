import { useMutation } from "@tanstack/react-query";
import { checkUserId } from "../api/axiosInstance";

function useUserIdCheck() {
  const mutation = useMutation<boolean, Error, string>({
    mutationFn: checkUserId,
    onSuccess: (isValid) => {
      console.log(`ID is ${isValid ? "valid" : "invalid"}`);
    },
    onError: (error: Error) => {
      console.error("ID 중복 검사 중 에러 발생:", error.message);
    },
  });

  return mutation;
}

export default useUserIdCheck;
