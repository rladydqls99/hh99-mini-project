import axios from "axios";

const postSignup = async ({ nickname, email, password }) => {
  try {
    const response = await axios.post("http://3.36.132.42:8080/api/signup", {
      nickname,
      email,
      password,
    });

    console.log("회원가입 성공", response);
  } catch (error) {
    console.log("회원가입 실패", error);
    alert(error.response.data.message);
  }
};

export { postSignup };
