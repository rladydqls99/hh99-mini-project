import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import {
  deleteComments,
  getComments,
  patchComments,
  addComments,
} from "../../api/comments";
import { Container, StyledCommentsDiv, StyledComment } from "./styles";
import { ModalSetUp, ModalFlex } from "./Modal";
import Comment from "./Comment";
import { useState } from "react";

function Detail() {
  // 전역으로 사용할 것들
  const { state } = useLocation();
  const params = useParams();
  const { data } = useQuery("comments", getComments);
  const queryClient = useQueryClient();

  // 댓글 추가하기
  const [comments, setComments] = useState("");

  const onChangeComments = (e) => {
    setComments(e.target.value);
  };

  const addMutation = useMutation(addComments, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
    onError: (error) => {
      console.log("add mutation error", error);
    },
  });

  const addCommentsHandler = (detailId, newComments) => {
    addMutation.mutate({ detailId, newComments });
    setComments("");
  };
  // ----------------------------------------------------------------

  // 댓글 수정하기
  const patchMutation = useMutation(patchComments, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
    onError: (error) => {
      console.log("patch mutation error", error);
    },
  });
  // ----------------------------------------------------------------

  const patchCommentsHandler = (commentsID, updateComments) => {
    patchMutation.mutate({ commentsID, updateComments });
  };

  // 댓글 삭제하기
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
  // ----------------------------------------------------------------

  // 프로필 모달 관리
  const Modal = (commentID) => {
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
  // ------------------------------------------------------

  return (
    <>
      <Container>
        <h1>{state.companyName}</h1>
        <h3>{state.location}</h3>
      </Container>
      <Container>
        <StyledCommentsDiv>
          <h1>댓글!!!!!!!</h1>
          <div>
            <textarea
              value={comments}
              onChange={onChangeComments}
              type="text"
              placeholder="댓글을 입력해주세요"
            />
            <button onClick={() => addCommentsHandler(params.id, comments)}>
              댓글 추가하기
            </button>
          </div>
        </StyledCommentsDiv>
        {data &&
          data
            .filter((comment) => {
              return comment.detailid === parseInt(params.id);
            })
            .map((comment, index) => (
              <StyledComment key={comment.id}>
                <div>
                  <button onClick={() => openModal(index)}>프로필</button>
                  {modalOpenStates[index] && (
                    <ModalFlex>
                      <ModalSetUp>
                        <Modal commentID={comment.id} />
                        <button onClick={() => closeModal(index)}>X</button>
                      </ModalSetUp>
                    </ModalFlex>
                  )}
                  <h3>comment Id: {comment.id}</h3>
                </div>
                {/* 각 댓글을 Comment 컴포넌트로 대체 */}
                <Comment
                  comment={comment.comment}
                  onEdit={(editedComment) =>
                    patchCommentsHandler(comment.id, editedComment)
                  }
                  onDelete={() => doRemoveComments(comment.id)}
                />
              </StyledComment>
            ))}
      </Container>
    </>
  );
}

export default Detail;
