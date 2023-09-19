import axios from "axios";

// company 리스트 가져오기
const getCompany = async () => {
  try {
    const response = await axios.get("http://3.36.132.42:8080");

    return response.data;
  } catch (error) {
    console.log("error 발생했습니다.", error);
  }
};

export { getCompany };
