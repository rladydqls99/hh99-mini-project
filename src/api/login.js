import axios from "axios";
import { setCookie } from "../cookies/cookies";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate;
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
      navigate("/");
    }
  } catch (error) {
    console.error("로그인 실패", error);
    alert("이메일 혹은 비밀번호를 확인하세요.");
  }
};

export { postLogin };
