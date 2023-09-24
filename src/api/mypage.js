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

// 유저 닉네임 변경하기
export const patchNickname = async (props) => {
  const memberId = props.memberId;
  const changeNickname = props.changeNickname;
  const token = props.token;
  console.log(props.memberId);
  console.log(props.changeNickname);
  console.log(props.token);
  try {
    const response = await axios.put(
      `http://3.36.132.42:8080/api/member/me`,
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
