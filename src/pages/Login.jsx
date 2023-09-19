import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../cookies/cookies";
import { postLogin } from "../api/login";

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
      navigate("/");
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

  const requestLogin = async (e) => {
    e.preventDefault(); // 폼 제출 이벤트 기본 동작 막기

    if (!email.length || !password.length) {
      alert("이메일과 비밀번호 모두 입력해주세요");
      return;
    }

    if (!email.includes("@")) {
      alert("이메일을 올바르게 입력해주세요.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });

      if (response.status === 201) {
        setCookie("token", response.data.token, {
          path: "/",
          secure: true,
          maxAge: 3000,
        });

        setEmail("");
        setPassword("");

        alert("로그인 되었습니다.");
        navigate("/");
      }
    } catch (error) {
      console.error("로그인 실패", error);
      alert("이메일 혹은 비밀번호를 확인하세요.");
    }
  };

  return (
    <ContainerDiv>
      <FlexForm onSubmit={requestLogin}>
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
        <ButtonStyle back-color={"#4E61FF"} type="submit">
          로그인 하기
        </ButtonStyle>
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
