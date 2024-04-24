/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const showAxiosError = (error: any) => {
  if (error instanceof AxiosError) {
    const resMessage =
      (error.response && error.response.data && error.response.data.message) ||
      error.response?.data.detail ||
      error.message ||
      error.toString();
    toast.error(resMessage, {
      position: "top-right",
    });
  }
};
