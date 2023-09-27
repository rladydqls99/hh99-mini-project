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
  const [inputError, setInputError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

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
    setInputError("");
    setPasswordError("");
    setEmailError("");

    if (!nickname || !email || !password) {
      setInputError("값을 모두 입력해주세요");
      return;
    } else {
      setInputError("");
    }

    if (password !== checkPassword) {
      setPasswordError("비밀번호와 비밀번호 확인 값이 다릅니다");
      return;
    } else {
      setPasswordError("");
    }

    if (!email.includes("@")) {
      setEmailError("이메일을 알맞게 입력해주세요.");
      return;
    } else {
      setEmailError("");
    }

    if (!emailError && !passwordError && !inputError) {
      mutation.mutate({ nickname, email, password });
    }
  };

  const queryClient = useQueryClient();
  const mutation = useMutation(postSignup, {
    onSuccess: () => {
      queryClient.invalidateQueries("signup");
      navigate("/login");
    },
    onError: () => {
      queryClient.invalidateQueries("signup");
      setEmail("");
      setNickname("");
      setPassword("");
      setCheckPassword("");
    },
  });

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
              {inputError && <div style={{ color: "red" }}>{inputError}</div>}
              {emailError && <div style={{ color: "red" }}>{emailError}</div>}
              {passwordError && (
                <div style={{ color: "red" }}>{passwordError}</div>
              )}
              <p>
                <ButtonStyle
                  onClick={onSubmitHandler}
                  font-color={"white"}
                  back-color={"#e393b9"}
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
