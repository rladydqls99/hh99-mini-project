import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idOnChangeHandler = (e) => {
    setId(e.target.value);
  };

  const pwOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!id || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_MOCK_URL}register`,
        { id, password }
      );

      console.log("회원가입 성공", response.data);
      alert("회원가입 완료");
      navigate("/");
    } catch (error) {
      console.log("회원가입 실패", error);
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <div>
        <h1>회원가입</h1>

        <form onSubmit={onSubmitHandler}>
          아이디
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={idOnChangeHandler}
          />
          비밀번호
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={pwOnChangeHandler}
          />
          <div>
            <button>회원가입 하기</button>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
