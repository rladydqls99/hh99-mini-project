import axios from "axios";

// 기업 리스트 가져오기
export const getCompany = async (page, size) => {
  try {
    const response = await axios.get(
      `https://miniproject.kro.kr/api/company?page=${page}&size=${size}`
    );
    return response.data;
  } catch (error) {
    console.log("error 발생했습니다.", error);
  }
};

// 기업 검색하기
export const searchCompany = async (companyName) => {
  try {
    const response = await axios.get(
      `https://miniproject.kro.kr/api/company?name=${companyName}`
    );
    return response.data;
  } catch (error) {
    console.log("기업 검색 에러발생", error);
  }
};
