import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { deleteComments, getComments, patchComments } from "../../api/comments";
import { Container, StyledCommentsDiv, StyledComment } from "./styles";
import { ModalSetUp, ModalFlex } from "./Modal";
import Comment from "./Comment"; // 새로운 Comment 컴포넌트를 임포트합니다.

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
            .map((comment) => (
              <StyledComment key={comment.id}>
                <div>
                  <button>프로필</button>
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
