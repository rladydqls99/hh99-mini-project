import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../cookies/cookies";
import { Link } from "react-router-dom";
import { Navbar, FlexContainer, ButtonToggle } from "./styles";

function Header() {
  //로그인 상태
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const token = getCookie("token");
  // console.log("header 토큰", token);

  // 마이페이지/회원가입 버튼
  const onMypageToggleButtonHandler = () => {
    console.log(token);
    if (token) {
      removeCookie("token");
      navigate("/signup");
    } else {
      navigate("/mypage");
    }
  };

  // 로그인/로그아웃 버튼
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
      <Navbar>
        <FlexContainer>
          <ButtonToggle
            type="button"
            aria-controls="navbarSupportedContent4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></ButtonToggle>
          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent4"
            data-te-collapse-item
          >
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li
                className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                data-te-nav-item-ref
              >
                <a
                  className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  aria-current="page"
                  href="#"
                  data-te-nav-link-ref
                >
                  <Link to="/" style={{ fontWeight: "bold" }}>
                    JobPlanet
                  </Link>
                </a>
              </li>
            </ul>

            <div className="flex items-center">
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none"
                onClick={onMypageToggleButtonHandler}
              >
                {token ? "마이페이지" : "회원가입"}
              </button>
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none"
                onClick={onToggleButtonHandler}
              >
                {token ? "로그아웃" : "로그인"}
              </button>
            </div>
          </div>
        </FlexContainer>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Header;
