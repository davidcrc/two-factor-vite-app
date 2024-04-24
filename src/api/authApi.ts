// import axios, { AxiosRequestConfig } from 'axios';
// import AxiosMockAdapter from 'axios-mock-adapter';

const BASE_URL = "http://localhost:8000/api/";

// const authApi = axios.create({
//   baseURL: BASE_URL,
//   withCredentials: true,
// });

// const axiosMockInstance = axios.create();
// const axiosMockAdapterInstance= new AxiosMockAdapter(axiosMockInstance, { delayResponse: 0 });

// export default axiosMockInstance;

// authApi.defaults.headers.common["Content-Type"] = "application/json";

import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { ILoginResponse, IUser } from "./types";

const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const axiosMockInstance = axios.create();

const axiosMockAdapterInstance = new AxiosMockAdapter(axiosMockInstance, {
  delayResponse: 0,
});

axiosMockAdapterInstance.onPost("/auth/login").reply(() => {
  const user: IUser = {
    id: "1",
    name: "John Doe",
    email: "user@example.com",
    otp_enabled: "false",
  };

  const response: ILoginResponse = {
    status: "success",
    user,
  };

  return [200, response];
});

export { axiosMockAdapterInstance, axiosMockInstance, authApi };
