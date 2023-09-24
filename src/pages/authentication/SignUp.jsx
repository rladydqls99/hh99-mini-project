import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignup } from "../../api/signup";
import {
  ContainerDiv,
  FlexForm,
  InputContent,
  ButtonStyle,
  BorderDiv,
  Background,
  IconContainer,
} from "./styles";
import { useMutation, useQueryClient } from "react-query";
import { colors } from "../../color/colors";
import { SignupIcon } from "../../icon/icons";

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
      console.log("mutation 성공하셨습니다.");
      navigate("/login");
    },
    onError: () => {
      queryClient.invalidateQueries("signup");
      console.log("mutation 실패하셨습니다.");
    },
  });
  // mutation(=변형) 데이터를 생성/업데이트/삭제 할 때 사용
  // onSucess는 mutation이 성공하고 결과를 전달할 때 실행

  return (
    <>
      <Background back-color={colors.background}>
        <ContainerDiv>
          <FlexForm>
            <IconContainer>
              <SignupIcon />
            </IconContainer>
            <BorderDiv>
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
              <p>
                <ButtonStyle
                  onClick={onSubmitHandler}
                  font-color={"white"}
                  back-color={colors.darkColor}
                  type="submit"
                >
                  회원가입 하기
                </ButtonStyle>
              </p>
              <ButtonStyle
                onClick={() => {
                  navigate("/login");
                }}
                font-color={"black"}
                back-color={"transparent"}
              >
                로그인 하기
              </ButtonStyle>
            </BorderDiv>
          </FlexForm>
        </ContainerDiv>
      </Background>
    </>
  );
}

export default SignUp;
