import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getMemberInfo } from "../../../api/mypage";
import { ModalFlex, ModalSetUp } from "./modalstyle";

function Modal({ modalOpen, nickname, email }) {
  const { data } = useQuery("members", getMemberInfo);

  // console.log(data);
  const closeModal = () => {
    modalOpen = false;
  };
  console.log(modalOpen, nickname, email);
  return (
    <>
      <ModalFlex>
        <ModalSetUp>
          {/* <div>닉네임: {data.nickname}</div> */}
          {/* <div>이메일: {data.email}</div> */}
          <button onClick={closeModal}>X</button>
        </ModalSetUp>
      </ModalFlex>
    </>
  );
}

export default Modal;
