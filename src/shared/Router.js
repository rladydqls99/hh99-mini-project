import React from "react";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/main/Main";
import Header from "../pages/header/Header";
import Detail from "../pages/detail/Detail";
import PatchDetail from "../pages/detail/PatchDetail";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Mypage from "../pages/Mypage";

const Router = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route element={<Header />}>
            <Route path="/" element={<Main />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route
              path="/patchdetail/:commentId"
              element={<PatchDetail />}
            ></Route>
          </Route>
          <Route path="mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default Router;
