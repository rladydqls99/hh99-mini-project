import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import Mypage from "../pages/Mypage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="detail" element={<Detail />} />
        <Route path="mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
