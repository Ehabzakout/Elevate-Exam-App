"use server";

import getToken from "@/lib/utils/get-token";
import axios, { isAxiosError } from "axios";

// Grouping all of your case-code in a single reusable utility is not a good practice in functional programming
// + Please avoid using axios without a serious need for axios

export async function submitAction<T extends Record<string, string>>(
  values: T,
  api: string,
  method: string,
) {
  const token = await getToken();

  try {
    if (token) {
      const { data } = await axios.request({
        url: `https://exam.elevateegy.com/api/v1/${api}`,
        data: values,
        method,
        headers: { token },
      });
      if (data.message === "success" || data.status === "Success") {
        return data;
      }
    } else {
      const { data } = await axios.request({
        url: `https://exam.elevateegy.com/api/v1/${api}`,
        data: values,
        method,
      });
      if (data.message === "success" || data.status === "Success") {
        return data;
      }
    }
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    } else return { message: "Invalid Email" };
  }
}
