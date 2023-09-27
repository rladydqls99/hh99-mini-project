import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../cookies/cookies";
import {
  Navbar,
  ButtonToggle,
  NavList,
  NavItem,
  NavLink,
  FlexEnd,
  IconFlex,
} from "./styles";
import base64 from "base-64";
import { MineSweeper } from "../../icon/icons";

function Header() {
  const navigate = useNavigate();
  const token = getCookie("token");

  // 마이페이지 디코딩
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
    if (token) {
      removeCookie("token");
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  return (
    <div style={{ backgroundColor: "#f4f2f1" }}>
      <Navbar>
        <NavList>
          <NavItem>
            <NavLink to={"/"}>
              <IconFlex>
                MineSweeper
                <MineSweeper />
              </IconFlex>
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
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Header;
