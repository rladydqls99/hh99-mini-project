import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { StyledNav, StyledUl } from "./styles";
import { getCookie, removeCookie } from "../../cookies/cookies";

function Header() {
  const [login, setLogin] = useState(false);
  //로그인 상태
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie();
    console.log(token);
    if (token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);
  // useEffect로 컴포넌트가 마운트 될 때 로그인 상태를 초기화

  const onToggleButtonHandler = () => {
    if (login) {
      setLogin(false);
      removeCookie();
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
            {login ? "로그아웃" : "로그인"}
          </button>
        </StyledUl>
      </StyledNav>
      <Outlet />
    </>
  );
}

export default Header;
