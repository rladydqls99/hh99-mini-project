import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../cookies/cookies";
import { ContainerDiv } from "../styled/styledComponent";

function Main() {
  const navigate = useNavigate();

  const [login, setLogin] = useState(false);
  const [mainContent, setMainContent] = useState([]);

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

  const mainData = async () => {
    const { data } = await axios.get("http://localhost:4000/");
    setMainContent(data);
  };

  useEffect(() => {
    mainData();
  }, []);

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
