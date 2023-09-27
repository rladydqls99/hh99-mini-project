import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../api/login";
import {
  ContainerDiv,
  FlexForm,
  InputContent,
  ButtonStyle,
  KakaoButton,
  BorderDiv,
  Background,
  IconContainer,
} from "./styles";
import { useMutation, useQueryClient } from "react-query";
import kakaoLogin from "../../img/kakao_login_medium_wide.png";
import { colors } from "../../color/colors";
import { LoginIcon } from "../../icon/icons";

function Login() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const pwOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const requestLogin = async (e) => {
    e.preventDefault();
    setInputError("");
    setEmailError("");

    if (!email.length || !password.length) {
      setInputError("이메일과 비밀번호 모두 입력해주세요.");
      return;
    } else {
      setInputError("");
    }

    if (!email.includes("@")) {
      setEmailError("이메일을 정확히 입력해주세요.");
      return;
    } else {
      setEmailError("");
    }

    if (!emailError && !inputError) {
      mutation.mutate({ email, password });
    }
  };

  const mutation = useMutation(postLogin, {
    onSuccess: () => {
      queryClient.invalidateQueries("login");
      navigate("/");
    },
    onError: () => {
      queryClient.invalidateQueries("login");
    },
  });

  return (
    <Background back-color={colors.background}>
      <ContainerDiv>
        <FlexForm>
          <IconContainer>
            <LoginIcon />
          </IconContainer>
          <BorderDiv>
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
            {inputError && <div style={{ color: "red" }}>{inputError}</div>}
            {emailError && <div style={{ color: "red" }}>{emailError}</div>}
            <ButtonStyle
              onClick={requestLogin}
              font-color={"white"}
              back-color={"#e393b9"}
            >
              로그인 하기
            </ButtonStyle>
            <KakaoButton
              id="login-kakao-btn"
              onClick={() =>
                (window.location.href =
                  "https://kauth.kakao.com/oauth/authorize?client_id=7af57035200ce2da34864e794371c7db&redirect_uri=https://miniproject-frontend-chi.vercel.app/api/user/kakao/callback&response_type=code")
              }
            >
              <img src={kakaoLogin} />
            </KakaoButton>
            <ButtonStyle
              onClick={() => {
                navigate("/signup");
              }}
              font-color={"black"}
              back-color={"transparent"}
            >
              회원가입 하기
            </ButtonStyle>
          </BorderDiv>
        </FlexForm>
      </ContainerDiv>
    </Background>
  );
}

export default Login;
