import axios from "axios";

// 회원가입
export const postSignup = async ({ nickname, email, password }) => {
  console.log(nickname, email, password);
  try {
    await axios.post(
      "https://miniproject.kro.kr/api/signup",
      {
        nickname,
        email,
        password,
      },
      { withCredentials: true }
    );
    alert("회원가입이 완료되었습니다.");
  } catch (error) {
    alert(error.response.data.msg);
    return Promise.reject(error);
  }
};
