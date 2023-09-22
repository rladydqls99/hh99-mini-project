import axios from "axios";
import { setCookie } from "../cookies/cookies";

const postLogin = async ({ email, password }) => {
  try {
    const response = await axios.post("http://3.36.132.42:8080/api/login", {
      email,
      password,
    });

    const token = response.data.token;
    if (response.status === 200) {
      setCookie("token", response.data.token, {
        path: "/",
        secure: true,
        maxAge: 3000,
      });
      // path: 쿠키가 어디에서 유효하냐 /-> 모든 경로
      // secrue: true http를 사용해야 쿠키 설정 가능
      // 쿠키는 50분 동안 유효(보안 등으로 인해)
      alert("로그인 되었습니다.");
    }
  } catch (error) {
    alert(error.response.data.msg);
    return Promise.reject(error);
  }
};

export { postLogin };
