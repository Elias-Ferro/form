import { BASE_URL } from "./api";

export const getAddress = async (cep: number) => {
  try {
    const apiUrl = `${BASE_URL}/${cep}/json`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};