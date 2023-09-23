import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getMemberInfo } from "../../../api/mypage";
import { ModalFlex, ModalSetUp } from "./modalstyle";

function Modal({ memberId, closeModal }) {
  const { isError, isLoading, data } = useQuery("members", () =>
    getMemberInfo(memberId)
  );

  if (isLoading) {
    return <div>데이터 로딩 중...</div>;
  }

  if (isError) {
    return <div>데이터를 가져오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <>
      <ModalFlex>
        <ModalSetUp>
          <div>닉네임: {data.nickname}</div>
          <div>이메일: {data.email}</div>
          <button onClick={closeModal}>X</button>
        </ModalSetUp>
      </ModalFlex>
    </>
  );
}

export default Modal;
