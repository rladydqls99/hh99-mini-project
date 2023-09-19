import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteComments, getComments } from "../../api/comments";
import { Container, StyledCommentsDiv, StyledComment } from "./styles";
import { ModalSetUp, ModalFlex } from "./Modal";

function Detail() {
  const { state } = useLocation();
  const params = useParams();
  const { data } = useQuery("comments", getComments);
  const navigate = useNavigate();

  // 댓글 수정페이지로 이동
  const goPatchDetail = (commentId, comments, detailId) => {
    navigate(`/patchdetail/${commentId}`, {
      state: {
        comments,
        detailId,
      },
    });
  };

  // 댓글 삭제하기
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deleteComments, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
    onError: (error) => {
      console.log("error 발생", error);
    },
  });

  const doRemoveComments = (commentId) => {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      deleteMutation.mutate(commentId);
    }
  };

  const Modal = () => {
    return (
      <>
        <div>닉네임</div>
        <div>이메일</div>
      </>
    );
  };

  // 각 댓글의 모달 열림 상태를 관리하는 배열
  const [modalOpenStates, setModalOpenStates] = useState(
    data?.map(() => false) || []
  );

  // 모달 열기 함수
  const openModal = (index) => {
    const newModalOpenStates = [...modalOpenStates];
    newModalOpenStates[index] = true;
    setModalOpenStates(newModalOpenStates);
  };

  // 모달 닫기 함수
  const closeModal = (index) => {
    const newModalOpenStates = [...modalOpenStates];
    newModalOpenStates[index] = false;
    setModalOpenStates(newModalOpenStates);
  };

  return (
    <>
      <Container>
        <h1>{state.companyName}</h1>
        <h3>{state.location}</h3>
      </Container>
      <Container>
        <StyledCommentsDiv>
          <h1>댓글!!!!!!!</h1>
          <button>댓글 더보기</button>
        </StyledCommentsDiv>
        {data &&
          data
            .filter((comment) => {
              return comment.detailid === parseInt(params.id);
            })
            .map((comment, index) => {
              return (
                <StyledComment key={comment.id}>
                  <div>
                    <button onClick={() => openModal(index)}>프로필</button>
                    {modalOpenStates[index] && (
                      <ModalFlex>
                        <ModalSetUp>
                          <Modal />
                          <button onClick={() => closeModal(index)}>X</button>
                        </ModalSetUp>
                      </ModalFlex>
                    )}
                  </div>
                  <h3>comment Id: {comment.id}</h3>
                  <h4>댓글: {comment.comment}</h4>
                  <button
                    onClick={() =>
                      goPatchDetail(
                        comment.id,
                        comment.comment,
                        comment.detailid
                      )
                    }
                  >
                    수정
                  </button>
                  <button onClick={() => doRemoveComments(comment.id)}>
                    삭제
                  </button>
                </StyledComment>
              );
            })}
      </Container>
    </>
  );
}

export default Detail;
