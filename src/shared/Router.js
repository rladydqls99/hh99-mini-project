import React from "react";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/main/Main";
import Header from "../pages/header/Header";
import Detail from "../pages/detail/Detail";
import SignUp from "../pages/authentication/SignUp";
import Login from "../pages/authentication/Login";
import Mypage from "../pages/mypage/Mypage";

const Router = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Main />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="mypage" element={<Mypage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default Router;
