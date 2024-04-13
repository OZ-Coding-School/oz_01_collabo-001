import axiosInstance from "./mockSetup";

export const checkUserId = async (userId: string): Promise<boolean> => {
  console.log(`checkUserId User ID: ${userId}`);
  const response = await axiosInstance.get(`/api/check-user-id`, {
    params: { userId },
  });
  console.log("rd", response.data);
  console.log("rdi", response.data.isValid);
  return response.data;
};
