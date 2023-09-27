import axios from "axios";

export const postSignup = async ({ nickname, email, password }) => {
  console.log(nickname, email, password);
  try {
    const response = await axios.post(
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
  }
};
