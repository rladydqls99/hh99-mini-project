import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../cookies/cookies";
import { postLogin } from "../../api/login";
import { ContainerDiv, FlexForm, InputContent, ButtonStyle } from "./styles";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { setCookie } from "../../cookies/cookies";

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

  // 카카오 로그인하기
  const kakaoLogin = async () => {
    try {
      // 비동기 작업을 수행하기 위해 await를 사용하고, 화살표 함수 내에서 직접 URL을 설정합니다.
      const response = await axios.get(
        "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=7af57035200ce2da34864e794371c7db&redirect_uri=http://3.36.132.42:8080/api/user/kakao/callback"
      );

      console.log(response);
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
      console.log("kakao 로그인 에러", error);
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
        <button id="login-kakao-btn" onClick={kakaoLogin}>
          카카오로 로그인하기
        </button>
      </FlexForm>
    </ContainerDiv>
  );
}

export default Login;
