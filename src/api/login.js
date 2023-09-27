import axios from "axios";
import { setCookie } from "../cookies/cookies";

// 이메일 로그인
export const postLogin = async ({ email, password }) => {
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
    }
  } catch (error) {
    alert(error.response.data.msg);
    return Promise.reject(error);
  }
};
