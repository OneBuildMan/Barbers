import { AxiosResponse } from "axios";
import axios from "./axios";

const responseBody = (response: AxiosResponse) => response.data;

export const getBarbers = (): Promise<any> => {
  return axios.get(`barbers`).then(responseBody);
};
