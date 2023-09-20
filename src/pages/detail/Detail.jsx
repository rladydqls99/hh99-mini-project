import React, { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { deleteComments, getComments, patchComments } from "../../api/comments";
import { Container, StyledCommentsDiv, StyledComment } from "./styles";
import { ModalSetUp, ModalFlex } from "./modalstyle";
import Comment from "./Comment";
import axios from "axios";

function Detail() {
  // 전역으로 사용할 것들
  const { state } = useLocation();
  const params = useParams();
  const { data } = useQuery("comments", getComments);
  const queryClient = useQueryClient();

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
  const Modal = ({ commentId }) => {
    console.log(commentId);
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            // "http://3.36.132.42:8080/mypage/{userid}"
            "http://localhost:4000/member"
          );

          const userInfo = data.find((user) => user.id === commentId);

          if (userInfo) {
            setNickname(userInfo.nickname);
            setEmail(userInfo.email);
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, [commentId]);

    return (
      <>
        <div>닉네임: {nickname}</div>
        <div>이메일: {email}</div>
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
          <button>댓글 더보기</button>
          <div>
            <textarea type="text" placeholder="댓글을 입력해주세요" />
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
                        <Modal commentId={comment.id} />
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
