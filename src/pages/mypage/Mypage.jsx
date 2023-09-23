import React from "react";
import { getMemberInfo, patchNickname } from "../../api/mypage";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { MypageStyle, Flexbox, Photobox } from "./styles";
import { useState } from "react";
import { getCookie } from "../../cookies/cookies";

function Mypage() {
  const [changeNickname, setChangeNickname] = useState("");
  const { memberId } = useParams();
  const token = getCookie("token");
  const queryClient = useQueryClient();

  // 닉네임,이메일 불러오기
  const { isLoading, isError, data } = useQuery("members", () =>
    getMemberInfo(memberId)
  );

  if (isLoading) {
    <h1>로딩 중입니다..</h1>;
  }

  if (isError) {
    <h1>에러가 발생했습니다.</h1>;
  }

  // 닉네임 변경하기
  const nicknameMutation = useMutation(patchNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries("changeNickname");
      console.log("mutation 성공하셨습니다");
    },
  });

  const onNicknameClickButtonHandler = () => {
    nicknameMutation.mutate({ memberId, changeNickname, token });
  };

  const onNicknameChange = (e) => {
    setChangeNickname(e.target.value);
  };

  return (
    <>
      <Flexbox>
        <MypageStyle>
          <h1>마이 페이지</h1>
          <h2>{data?.nickname}님 환영합니다!</h2>
          <Photobox></Photobox>
          {data && (
            <>
              <div>닉네임: {data.nickname} </div>
              <div>
                <input value={changeNickname} onChange={onNicknameChange} />
                <button onClick={onNicknameClickButtonHandler}>변경</button>
              </div>

              <div>이메일: {data.email}</div>
            </>
          )}
        </MypageStyle>
      </Flexbox>
    </>
  );
}

export default Mypage;
