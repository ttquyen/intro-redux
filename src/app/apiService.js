import axios from "axios";

const apiService = axios.create({
  baseURL: "http://localhost:5000",
});

apiService.interceptors.request.use(
  (request) => {
    console.log("Start request");
    return request;
  },
  function (error) {
    console.log("Start error");
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    console.log("Start response");
    return response;
  },
  function (error) {
    console.log("Response error");
    return Promise.reject(error);
  }
);

export default apiService;
