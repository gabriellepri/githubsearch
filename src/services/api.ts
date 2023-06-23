import axios from "axios";

const request = async (searchValue: string) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${searchValue}`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao fazer requisição: ${error}`);
  }
};

export { request };