import axios from "axios";

const postSignup = async ({ nickname, email, password }) => {
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

    console.log("회원가입 성공", response);
    alert("회원가입이 완료되었습니다.");
  } catch (error) {
    console.log("회원가입 실패", error);
    alert(error.response.data.message);
  }
};

export { postSignup };
