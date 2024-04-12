import axios from "axios";

// const BASE_URL =  baseURL: 'http://localhost:5173';

export default axios.create({
    baseURL: 'http://localhost:8000'
});

// export default axios.create({
//   baseURL: BASE_URL
// });
