import axios from "axios";

// 댓글 쓴 유저 정보 가져오기
export const getMemberInfo = async (memberId) => {
  try {
    const response = await axios.get(
      `https://miniproject.kro.kr/api/member/${memberId}`
    );
    return response.data;
  } catch (error) {
    console.log("error 발생", error);
  }
};

// 유저 닉네임 변경하기
export const patchNickname = async (props) => {
  const changeNickname = props.changeNickname;
  const token = props.token;

  try {
    const response = await axios.put(
      `https://miniproject.kro.kr/api/member/me`,
      {
        nickname: changeNickname,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("patchNickname error 발생", error);
  }
};
