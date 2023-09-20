import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { StyledNav, StyledUl } from "./styles";
import { getCookie, removeCookie } from "../../cookies/cookies";

function Header() {
  //로그인 상태
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const token = getCookie("token");

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
          <li>JobPlanet</li>
          <li className="mypage">마이페이지</li>
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
