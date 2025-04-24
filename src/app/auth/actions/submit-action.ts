"use server";
import axios, { isAxiosError } from "axios";

export async function submitAction<T extends Record<string, string>>(
  values: T,
  api: string,
  method: string,
) {
  try {
    const { data } = await axios.request({
      url: `https://exam.elevateegy.com/api/v1/${api}`,
      data: values,
      method,
    });
    console.log(data);
    if (data.message === "success" || data.status === "Success") {
      return data;
    }
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    } else return { message: "Invalid Email" };
  }
}
