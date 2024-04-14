import { BASE_URL } from "./api";

export const getAddress = async (cep: number) => {
  try {
    const apiUrl = `${BASE_URL}/${cep}/json`;
    const response = await fetch(apiUrl);
    return response.json;
  } catch (error) {
    console.log(error);
  }
};
