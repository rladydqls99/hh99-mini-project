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
  BorderDiv,
  Background,
  IconContainer,
} from "./styles";
import { useMutation, useQueryClient } from "react-query";
import kakaoLogin from "../../img/kakao_login_medium_wide.png";
import { colors } from "../../color/colors";
import { LoginIcon } from "../../icon/icons";
import LoginModal from "./LoginModal";

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
    e.preventDefault();
    if (!email.length || !password.length) {
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
