import axios from "axios";

// 회원가입 요청을 보냄
const postSignup = async ({ nickname, email, password }) => {
  try {
    const response = await axios.post("http://localhost:4000/signup", {
      nickname,
      email,
      password,
    });
    console.log(nickname);

    console.log("회원가입 성공", response);
  } catch (error) {
    console.log("회원가입 실패", error);
    // alert(error.response.data.message);
  }
};

export { postSignup };
