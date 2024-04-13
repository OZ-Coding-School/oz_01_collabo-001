import { useMutation } from "@tanstack/react-query";
import { checkUserId } from "../api";

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

/*
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const checkUserId = async (userId: string): Promise<boolean> => {
  const response = await axios.get(`/api/check-user-id`, {
    params: { userId },
  });
  return response.data.isValid;
};

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

/*

import { useMutation } from 'react-query';

// This is your custom mutation function. It should return a Promise.
async function myMutationFunction(input: MyInputType): Promise<MyOutputType> {
  // Perform your mutation here and return a Promise.
}

function useMyMutation() {
  return useMutation(myMutationFunction, {
    // These are optional callbacks you can include in the options object.
    onSuccess: (data: MyOutputType) => {
      console.log('Mutation was successful:', data);
    },
    onError: (error: Error) => {
      console.error('Mutation failed with error:', error);
    },
  });
}

export default useMyMutation;

*/
