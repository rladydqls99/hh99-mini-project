import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignup, createUser } from "../api/signup";
import {
  ContainerDiv,
  FlexForm,
  InputContent,
  ButtonStyle,
} from "../styled/styledComponent";
import { useMutation, useQueryClient } from "react-query";

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

    if (!nickname || !email || !password) {
      alert("닉네임, 이메일, 비밀번호 모두 입력해주세요");
      return;
    }

    if (password !== checkPassword) {
      alert("비밀번호와 비밀번호 확인 값이 다릅니다");
      return;
    }

    if (!email.includes("@")) {
      alert("이메일을 알맞게 입력해주세요.");
      return;
    }
    mutation.mutate({ nickname, email, password });
  };

  const queryClient = useQueryClient();
  const mutation = useMutation(postSignup, {
    onSuccess: () => {
      queryClient.invalidateQueries("signup");
      console.log("성공하셨습니다.");
      navigate("/login");
    },
  });

  // const { isLoading, isError, data } = useQuery("signup", postSignup);
  // console.log(data);

  // if (isLoading) {
  //   return <h1>로딩 중입니다.</h1>;
  // }
  // if (isError) {
  //   return <h1>에러가 발생했습니다.</h1>;
  // }

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

          <ButtonStyle back-color={"#4E61FF"} type="submit">
            회원가입 하기
          </ButtonStyle>
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
