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

  const onMypageToggleButtonHandler = () => {
    if (!token) {
      removeCookie("token");
      navigate("/signup");
    } else {
      navigate("/mypage");
    }
  };

  const onToggleButtonHandler = () => {
    if (token) {
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
            <li className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              JobPlanet
            </li>
          </Link>
          <button onClick={onMypageToggleButtonHandler} className="mypage">
            {token ? "마이페이지" : "회원가입"}
          </button>
          <button
            className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
            onClick={onToggleButtonHandler}
          >
            {token ? "로그아웃" : "로그인"}
          </button>
        </StyledUl>
      </StyledNav>
      <Outlet />
    </>
  );
}

export default Header;
