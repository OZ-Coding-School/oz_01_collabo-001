import axios from "./axios";

export const login = async (user_id: string, password: string) => {
    const result=await axios.post("http://3.37.128.177/api/v1/business_user/login/", { user_id,password });
    console.log('api 호출', result);
    return result.data;
    
};