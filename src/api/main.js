import axios from "axios";

// company 리스트 가져오기
const getCompany = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/company`
    );
    return response.data;
  } catch (error) {
    console.log("error 발생", error);
  }
};

export { getCompany };
