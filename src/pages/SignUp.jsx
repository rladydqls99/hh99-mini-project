import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ContainerDiv,
  FlexForm,
  InputContent,
  ButtonStyle,
} from "../styled/styledComponent";

function SignUp() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const nickNameOnChangeHandler = (e) => {
    setNickname(e.target.value);
  };
  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const pwOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const setPwOnChangeHandler = (e) => {
    setCheckPassword(e.target.value);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!nickname.length || !email.length || !password.length) {
      alert("닉네임, 이메일, 비밀번호 모두 입력해주세요");
      setNickname("");
      setEmail("");
      setPassword("");
      setCheckPassword("");
      return;
    }

    if (password !== checkPassword) {
      alert("비밀번호와 비밀번호 확인 값이 다릅니다");
      setPassword("");
      setCheckPassword("");
      return;
    }

    if (email.includes("@") !== true) {
      alert("이메일을 알 맞게 입력해주세요.");
      setEmail("");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/signup", {
        // !signup으로 바꾸기
        nickname,
        email,
        password,
      });

      console.log("회원가입 성공", response.data);
      alert("회원가입 완료");
      navigate("/login");
    } catch (error) {
      console.log("회원가입 실패", error);
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <ContainerDiv>
        <FlexForm onSubmit={onSubmitHandler}>
          <h1>회원가입</h1>
          <InputContent
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={nickNameOnChangeHandler}
          />
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
          <InputContent
            type="password"
            placeholder="비밀번호 확인"
            value={checkPassword}
            onChange={setPwOnChangeHandler}
          />
          <ButtonStyle back-color={"#4E61FF"}>회원가입 하기</ButtonStyle>
          <ButtonStyle
            onClick={() => {
              navigate("/login");
            }}
            back-color={"lightgrey"}
          >
            로그인 하기
          </ButtonStyle>
        </FlexForm>
      </ContainerDiv>
    </>
  );
}

export default SignUp;
