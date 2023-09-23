import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getMemberInfo } from "../../../api/mypage";
import { ModalFlex, ModalSetUp } from "./modalstyle";

function Modal({ modalChangeBtn, memberID }) {
  const { data } = useQuery("members", () => getMemberInfo(memberID));

  return (
    <>
      <ModalFlex>
        <ModalSetUp>
          <div>닉네임: {data.nickname}</div>
          <div>이메일: {data.email}</div>
          <button onClick={modalChangeBtn}>X</button>
        </ModalSetUp>
      </ModalFlex>
    </>
  );
}

export default Modal;
