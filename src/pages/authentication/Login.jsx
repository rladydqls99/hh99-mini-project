import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../cookies/cookies";
import { postLogin } from "../../api/login";
import {
  ContainerDiv,
  FlexForm,
  InputContent,
  ButtonStyle,
  KakaoButton,
} from "./styles";
import { useMutation, useQueryClient } from "react-query";
import kakaoLogin from "../../img/kakao_login_medium_wide.png";

function Login() {
  const navigate = useNavigate();
  const token = getCookie("token");
  const queryClient = useQueryClient();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const pwOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const requestLogin = async (e) => {
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

  const mutation = useMutation(postLogin, {
    onSuccess: () => {
      queryClient.invalidateQueries("login");
      console.log("mutation 성공하셨습니다.");
      navigate("/");
    },
    onError: () => {
      queryClient.invalidateQueries("login");
      console.log("mutation 실패하셨습니다.");
    },
  });

  return (
    <ContainerDiv>
      <FlexForm>
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
          onClick={requestLogin}
          back-color={"#4E61FF"}
          type="submit"
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
        <KakaoButton
          id="login-kakao-btn"
          onClick={() =>
            (window.location.href =
              "https://kauth.kakao.com/oauth/authorize?client_id=7af57035200ce2da34864e794371c7db&redirect_uri=http://localhost:3000/api/user/kakao/callback&response_type=code")
          }
        >
          <img src={kakaoLogin} />
        </KakaoButton>
      </FlexForm>
    </ContainerDiv>
  );
}

export default Login;
