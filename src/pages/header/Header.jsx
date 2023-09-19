import React from "react";
import { Outlet } from "react-router-dom";
import { StyledNav, StyledUl } from "./styles";

function Header() {
  // removeCookie
  return (
    <>
      <StyledNav>
        <StyledUl>
          <li>기업랭킹</li>
          <li>뉴스</li>
          <li>기업 비교</li>
          <li className="mypage">마이페이지</li>
        </StyledUl>
      </StyledNav>
      <Outlet />
    </>
  );
}

export default Header;
