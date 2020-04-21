import axios from "axios";
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error.response);
  }
);
