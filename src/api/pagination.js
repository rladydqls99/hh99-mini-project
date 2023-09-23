import axios from "axios";

export const getPagination = async (page = 0, size = 8) => {
  try {
    const response = await axios.get(`/api/company?page=${page}&size=${size}`);
    return response.data;
  } catch (error) {
    console.log("pagination 에러 발생", error);
  }
};
