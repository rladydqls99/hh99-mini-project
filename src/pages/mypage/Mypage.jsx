import React, { useEffect } from "react";
import { getMemberInfo } from "../../api/mypage";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function Mypage() {
  const { memberId } = useParams();
  useEffect(() => {}, [memberId]);
  // 닉네임,이메일 불러오기
  const { isLoading, isError, data } = useQuery("members", () =>
    getMemberInfo(memberId)
  );

  if (isLoading) {
    return <h1>로딩 중입니다..</h1>;
  }

  if (isError) {
    return <h1>에러가 발생했습니다.</h1>;
  }

  return (
    <>
      <h1>마이 페이지</h1>
      {data && (
        <>
          <div>{data.nickname}</div>
          <div>{data.email}</div>
        </>
      )}
    </>
  );
}

export default Mypage;
