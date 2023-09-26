import axios from "axios";
import { setCookie } from "../cookies/cookies";

const postLogin = async ({ email, password }) => {
  try {
    const response = await axios.post("https://miniproject.kro.kr/api/login", {
      email,
      password,
    });

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

// 카카오 로그인
export const kakaoLogin = async (codeParam) => {
  try {
    const response = await axios.get(
      `https://miniproject.kro.kr/api/user/kakao/callback?code=${codeParam}`
    );
    if (response.status === 200) {
      setCookie("token", response.data.token, {
        path: "/",
        secure: true,
        maxAge: 3000,
      });
      // path: 쿠키가 어디에서 유효하냐 /-> 모든 경로
      // secrue: true http를 사용해야 쿠키 설정 가능
      // 쿠키는 50분 동안 유효(보안 등으로 인해)
    }
  } catch (error) {
    alert(error.response.data.msg);
    return Promise.reject(error);
  }
};

export { postLogin };
