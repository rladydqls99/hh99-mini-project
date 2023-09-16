import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idOnChangeHandler = (e) => {
    setId(e.target.value);
  };

  const pwOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_MOCK_URL}user`,
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

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_MOCK_URL}login`,
        { id, password }
      );
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

      setId("");
      setPassword("");

      alert(`${id}님 환영합니다!`);
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
          placeholder="아이디"
          value={id}
          onChange={idOnChangeHandler}
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
