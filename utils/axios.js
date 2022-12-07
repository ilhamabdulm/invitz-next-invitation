import axios from "axios";

const mode = process.env.NODE_ENV;

export let BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.invitz.me/api/v1/";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

instance.interceptors.request.use(function (config) {
  return config;
});

export const defaultError = {
  code: 500,
  status: "error",
  message: "Failed to fetch data. Please contact developer.",
};

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (err) {
    if (axios.isCancel(err)) {
      return Promise.reject("request canceled");
    }

    console.log(err);

    if (err.response && err.response.data) {
      if (err.response.status === 401) {
        clearStorages();
        // location.reload();
      }
      return Promise.reject(err.response.data);
    } else {
      return Promise.reject(defaultError);
    }
  }
);

export default instance;
