import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../cookies/cookies";
import { Link } from "react-router-dom";
import {
  Navbar,
  FlexContainer,
  ButtonToggle,
  VisibleContainer,
  NavList,
  NavItem,
  NavLink,
  FlexEnd,
} from "./styles";
import base64 from "base-64";

function Header() {
  const navigate = useNavigate();

  // 마이페이지 디코딩
  const token = getCookie("token");

  let dec = "";
  if (token) {
    const payload = token.substring(
      token.indexOf(".") + 1,
      token.lastIndexOf(".")
    );
    dec = JSON.parse(base64.decode(payload));
  }

  // 마이페이지/회원가입 버튼
  const onMypageToggleButtonHandler = () => {
    if (!token) {
      navigate("/signup");
    } else {
      navigate(`/mypage/${dec.member_id}`);
    }
  };

  // 로그인/로그아웃 버튼
  const onToggleButtonHandler = () => {
    console.log("hi");
    if (token) {
      removeCookie("token");
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar>
        <FlexContainer>
          <VisibleContainer>
            <NavList>
              <NavItem>
                <NavLink to={"/"}>JobPlanet</NavLink>
              </NavItem>
            </NavList>

            <FlexEnd>
              <ButtonToggle onClick={onMypageToggleButtonHandler}>
                {token ? "마이페이지" : "회원가입"}
              </ButtonToggle>
              <ButtonToggle onClick={onToggleButtonHandler}>
                {token ? "로그아웃" : "로그인"}
              </ButtonToggle>
            </FlexEnd>
          </VisibleContainer>
        </FlexContainer>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Header;
