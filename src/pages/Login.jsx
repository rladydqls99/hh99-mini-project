import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../cookies/cookies";
import {
  ContainerDiv,
  FlexForm,
  InputContent,
  ButtonStyle,
} from "../styled/styledComponent";

function Login() {
  useEffect(() => {
    const token = getCookie();
    if (token) {
      navigate("/main");
    }
  }, []);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const pwOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/user`,
        {
          headers: {
            Authorization: `Bearer ${getCookie("token")}`,
          },
        }
      );
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };

  const onLoginSubmitHandler = async (e) => {
    e.preventDefault();

    if (!email.length || !password.length) {
      alert("이메일과 비밀번호 모두 입력해주세요");
      setEmail("");
      setPassword("");
      return;
    }

    if (!email.includes("@")) {
      alert("이메일을 올바르게 입력해주세요.");
      setEmail("");
      setPassword("");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      console.log(response.statusText, response);

      if (response.status === 201) {
        setCookie("token", response.data.token, {
          path: "/",
          secure: true,
          maxAge: 3000,
        });
        // path: "/" 쿠키를 모든 웹페이지에서 사용 가능하도록
        // 쿠키를 안전한 연결(HTTPS)에서만 전송하도록 함(보안 강화 목적)
        // 쿠키의 수명 3000초 = 5분 동안 유효

        getData();
      }

      setEmail("");
      setPassword("");

      alert("로그인 되었습니다.");
      navigate("/");
    } catch (error) {
      console.log("로그인 실패", error);
      alert(error.response.data.message);
    }
  };

  return (
    <ContainerDiv>
      <FlexForm onSubmit={onLoginSubmitHandler}>
        <h1>로그인</h1>
        <InputContent
          type="text"
          placeholder="이메일"
          value={email}
          onChange={emailOnChangeHandler}
        />
        <InputContent
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={pwOnChangeHandler}
        />
        <ButtonStyle back-color={"#4E61FF"}>로그인 하기</ButtonStyle>
        <ButtonStyle
          onClick={() => {
            navigate("/signup");
          }}
          back-color={"lightgrey"}
        >
          회원가입 하기
        </ButtonStyle>
      </FlexForm>
    </ContainerDiv>
  );
}

export default Login;
