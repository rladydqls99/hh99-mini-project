// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ContainerDiv, IconBox, ContentBox } from "./autentication/styles";

// function Mypage() {
//   const [myContent, setMyContent] = useState([]);
//   const myData = async () => {
//     const { data } = await axios.get("http://localhost:4000/users");
//     setMyContent(data);
//   };

//   useEffect(() => {
//     myData();
//   }, []);

//   return (
//     <ContainerDiv>
//       <h1>마이 페이지</h1>
//       <IconBox></IconBox>
//       {myContent.length > 0 ? (
//         <>
//           <ContentBox>닉네임: {`${myContent[0].nickname}`}</ContentBox>
//           <ContentBox>이메일: {`${myContent[0].email}`}</ContentBox>
//         </>
//       ) : (
//         <p>데이터를 불러오는 중입니다...</p>
//       )}
//     </ContainerDiv>
//   );
// }

// export default Mypage;
