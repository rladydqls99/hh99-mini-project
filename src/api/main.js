import axios from "axios";

// company 리스트 가져오기
const getCompany = async (page = 16, size = 9) => {
  try {
    const response = await axios.get(
      `http://3.36.132.42:8080/api/company?page=${page}&size=${size}`
    );
    return response.data;
  } catch (error) {
    console.log("error 발생했습니다.", error);
  }
};

// 기업 검색하기
const searchCompany = async (companyName) => {
  try {
    const response = await axios.get(
      `http://3.36.132.42:8080/api/company?name=${companyName}`
    );
    return response.data;
  } catch (error) {
    console.log("기업 검색 에러발생", error);
  }
};

export { getCompany, searchCompany };
