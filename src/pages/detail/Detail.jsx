import { useMutation, useQuery, useQueryClient } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  deleteComments,
  getComments,
  patchComments,
  addComments,
} from "../../api/comments";
import {
  Container,
  StyledCommentsDiv,
  StyledComment,
  BlurDiv,
  Blur,
} from "./styles";
import Comment from "./comment/Comment";
import { getCookie } from "../../cookies/cookies";
import Modal from "./modal/Modal";

function Detail() {
  // 전역으로 사용할 것들
  const { state } = useLocation();
  const params = useParams();
  const { data } = useQuery("comments", getComments);
  const queryClient = useQueryClient();
  const navigate = useNavigate();


  useEffect(() => {}, [params, state]);


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
    if (newComments.length === 0) {
      alert("댓글을 입력해주세요");
    } else {
      addMutation.mutate({ detailId, newComments, token });

      setComments("");
    }
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

  const patchCommentsHandler = (commentsID, updateComments) => {
    patchMutation.mutate({ commentsID, updateComments, token });
  };
  // ----------------------------------------------------------------

  // 댓글 삭제하기
  const deleteMutation = useMutation(deleteComments, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
    onError: (error) => {
      console.log("error 발생", error);
    },
  });

  const doRemoveComments = (commentsID) => {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      deleteMutation.mutate({ commentsID, token });
    }
  };
  // ----------------------------------------------------------------

  // 모달 열고 닫기 함수
  const [modalState, setModalState] = useState(false);

  const modalChangeBtn = () => {
    setModalState(!modalState);
  };

  // ------------------------------------------------------

  // 로그인 안됐을 때 댓글 안보이게 하기
  const token = getCookie("token");

  return (
    <>
      <Container>
        <h1>{state.companyName}</h1>
        <h3>{state.location}</h3>
      </Container>
      <StyledCommentsDiv>
        <h1>댓글</h1>
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
      <Container>
        {!!token ? (
          <>
            {data &&
              data
                .filter((comment) => {
                  return comment.companyId === parseInt(params.id);
                })
                .sort((before, after) => after.id - before.id)
                .map((comment, index) => (
                  <StyledComment key={comment.id}>
                    <div>
                      <button onClick={modalChangeBtn}>프로필</button>
                      {modalState ? (
                        <Modal
                          nickname={comment.nickname}
                          email={comment.email}
                          modalChangeBtn={modalChangeBtn}
                          memberID={comment.id}
                        />
                      ) : null}
                    </div>
                    {/* 각 댓글을 Comment 컴포넌트로 대체 */}
                    <Comment
                      memberId={comment.memberId}
                      comment={comment.comment}
                      commentId={comment.id}
                      onEdit={(editedComment) =>
                        patchCommentsHandler(comment.id, editedComment)
                      }
                      onDelete={() => doRemoveComments(comment.id)}
                    />
                  </StyledComment>
                ))}
          </>
        ) : (
          <>
            <BlurDiv>
              <Blur>
                <button onClick={() => navigate("/login")} className="btn">
                  로그인하고 댓글 보러가기!
                </button>
              </Blur>
              {data &&
                data
                  .filter((comment) => {
                    return comment.companyId === parseInt(params.id);
                  })
                  .map((comment, index) => (
                    <StyledComment key={comment.id}>
                      <div>
                        <button onClick={modalChangeBtn}>프로필</button>
                        {modalState ? (
                          <Modal
                            nickname={comment.nickname}
                            email={comment.email}
                            modalChangeBtn={modalChangeBtn}
                            memberID={comment.id}
                          />
                        ) : null}
                      </div>
                      {/* 각 댓글을 Comment 컴포넌트로 대체 */}
                      <Comment
                        memberId={comment.memberId}
                        comment={comment.comment}
                        onEdit={(editedComment) =>
                          patchCommentsHandler(comment.id, editedComment)
                        }
                        onDelete={() => doRemoveComments(comment.id)}
                      />
                    </StyledComment>
                  ))}
            </BlurDiv>
          </>
        )}
      </Container>
    </>
  );
}

export default Detail;
