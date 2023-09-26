import { useMutation, useQuery, useQueryClient } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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
  DetailLogoImage,
  CompanyContainer,
  CommentDiv,
  BackgroundDiv,
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
    console.log("hi");
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

  // 로그인 안됐을 때 댓글 안보이게 하기
  const token = getCookie("token");

  // 댓글이 없을 때 없음 출력
  const isComment =
    data &&
    data.filter((comment) => {
      return comment.companyId === parseInt(params.id);
    });

  return (
    <>
      <BackgroundDiv>
        <CompanyContainer>
          <DetailLogoImage src={state.logo} />
          <div>
            <h1>{state.companyName}</h1>
            <h3>위치: {state.location}</h3>
          </div>
        </CompanyContainer>
        <CommentDiv>
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
                          <button
                            className="profile"
                            onClick={() => openModal(index)}
                          >
                            프로필
                          </button>
                          {modalOpenStates[index] && (
                            <Modal
                              memberId={comment.memberId}
                              closeModal={() => closeModal(index)}
                            />
                          )}
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
                {isComment.length === 0 ? null : (
                  <BlurDiv>
                    <Blur>
                      <button
                        onClick={() => navigate("/login")}
                        className="btn"
                      >
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
                              <button
                                className="profile"
                                onClick={() => openModal(index)}
                              >
                                프로필
                              </button>
                              {modalOpenStates[index] && (
                                <Modal
                                  memberId={comment.memberId}
                                  closeModal={() => closeModal(index)}
                                />
                              )}
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
                )}
              </>
            )}
          </Container>
        </CommentDiv>
      </BackgroundDiv>
    </>
  );
}

export default Detail;
