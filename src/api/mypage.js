import axios from "axios";

// 댓글 쓴 유저 정보 가져오기
export const getMemberInfo = async (memberId) => {
  try {
    const response = await axios.get(
      `http://3.36.132.42:8080/api/member/${memberId}`
    );
    return response.data;
  } catch (error) {
    console.log("error 발생", error);
  }
};
