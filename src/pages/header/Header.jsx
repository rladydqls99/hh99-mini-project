import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { StyledNav, StyledUl } from "./styles";
import { getCookie, removeCookie } from "../../cookies/cookies";
import { Link } from "react-router-dom";

function Header() {
  //로그인 상태
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const token = getCookie("token");

  // 마이페이지/회원가입 버튼
  const onMypageToggleButtonHandler = () => {
    if (!token) {
      removeCookie("token");
      navigate("/signup");
    } else {
      navigate("/mypage");
    }
  };

  // 로그인/로그아웃 버튼
  const onToggleButtonHandler = () => {
    if (!login) {
      setLogin(false);
      removeCookie("token");
      navigate("/login");
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <StyledNav>
        <StyledUl>
          <Link to="/">
            <li>JobPlanet</li>
          </Link>
          <button onClick={onMypageToggleButtonHandler} className="mypage">
            {token ? "마이페이지" : "회원가입"}
          </button>
          <button onClick={onToggleButtonHandler}>
            {token ? "로그아웃" : "로그인"}
          </button>
        </StyledUl>
      </StyledNav>
      <Outlet />
    </>
  );
}

export default Header;
