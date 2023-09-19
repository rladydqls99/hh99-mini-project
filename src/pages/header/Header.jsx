import React from "react";
import { Outlet } from "react-router-dom";
import { StyledNav, StyledUl } from "./styles";

function Header() {
  return (
    <>
      <StyledNav>
        <StyledUl>
          <li>JobPlanet</li>
          <li className="mypage">마이페이지</li>
          <button>로그아웃</button>
        </StyledUl>
      </StyledNav>
      <Outlet />
    </>
  );
}

export default Header;
