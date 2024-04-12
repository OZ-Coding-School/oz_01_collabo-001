import axios from "./axios";

export const login = async (id: string, pw: string) => {
    const result=await axios.post("http://localhost:8000", { id,pw });
    return result.data.data;
};