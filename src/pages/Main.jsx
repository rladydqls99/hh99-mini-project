import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../cookies/cookies";
import { ContainerDiv } from "../styled/styledComponent";

function Main() {
  const navigate = useNavigate();

  const [login, setLogin] = useState(false);

  const onToggleHandler = () => {
    if (login) {
      setLogin(false);
      navigate("/login");
      removeCookie();
    } else {
      setLogin(true);
      navigate("/");
    }
  };

  const onMypageHandler = () => {
    navigate("/mypage");
  };

  return (
    <ContainerDiv>
      <button onClick={onToggleHandler}>{login ? "로그인" : "로그아웃"}</button>
      <button onClick={onMypageHandler}>마이페이지</button>
    </ContainerDiv>
  );
}

export default Main;
