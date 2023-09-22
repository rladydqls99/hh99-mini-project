import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContainerDiv, IconBox, ContentBox } from "./styles";

function Mypage() {
  const [myContent, setMyContent] = useState([]);
  const myData = async () => {
    const { data } = await axios
      .get
      // `http://3.36.132.42:8080/api/mypage/${member_id}`
      ();
    setMyContent(data);
  };

  useEffect(() => {
    myData();
  }, []);

  return (
    <>
      <h1>마이 페이지</h1>
      {/* <div>닉네임: {`${myContent.memberId.nickname}`}</div>
      <div>이메일: {`${myContent.memberId.email}`}</div> */}
      {/* // <ContainerDiv> */}
    </>
  );
}

export default Mypage;
