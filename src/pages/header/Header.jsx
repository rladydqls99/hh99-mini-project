import React from "react";
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

function Header() {
  const navigate = useNavigate();
  const token = getCookie("token");

  // 마이페이지/회원가입 버튼
  const onMypageToggleButtonHandler = () => {
    if (!token) {
      navigate("/signup");
    } else {
      navigate("/mypage");
    }
  };

  // 로그인/로그아웃 버튼
  const onToggleButtonHandler = () => {
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
          <ButtonToggle></ButtonToggle>
          <VisibleContainer>
            <NavList>
              <NavItem>
                <NavLink>
                  <Link to="/" style={{ fontWeight: "bold" }}>
                    JobPlanet
                  </Link>
                </NavLink>
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
