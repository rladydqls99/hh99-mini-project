import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../cookies/cookies";
import { postLogin } from "../../api/login";

import { ContainerDiv, FlexForm, InputContent, ButtonStyle } from "./styles";
import { useMutation, useQueryClient } from "react-query";

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
    e.preventDefault();

    if (!email.length || !password.length) {
      alert("이메일과 비밀번호 모두 입력해주세요");
      return;
    }

    if (!email.includes("@")) {
      alert("이메일을 올바르게 입력해주세요.");
      return;
    }
    mutation.mutate({ email, password });
  };

  const queryClient = useQueryClient();
  const mutation = useMutation(postLogin, {
    onSuccess: () => {
      queryClient.invalidateQueries("login");
      console.log("mutation 성공하셨습니다.");
    },
    onError: () => {
      queryClient.invalidateQueries("login");
      console.log("mutation 실패하셨습니다.");
    },
  });

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
        <ButtonStyle
          back-color={"#4E61FF"}
          type="submit"
          onClick={() => {
            navigate("/");
          }}
        >
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
