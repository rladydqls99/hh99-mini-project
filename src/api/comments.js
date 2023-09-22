import axios from "axios";

// comments 리스트 가져오기
const getComments = async () => {
  try {
    const response = await axios.get(`http://3.36.132.42:8080/api/comment`);
    return response.data;
  } catch (error) {
    console.log("error 발생", error);
  }
};

// 댓글 추가하기
const addComments = async (props) => {
  const companyId = props.detailId;
  const newComment = props.newComments;
  const token = props.token;

  try {
    const response = await axios.post(
      `http://3.36.132.42:8080/api/company/${companyId}/comment`,
      {
        comment: newComment,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    alert("댓글이 추가되었습니다.");
  } catch (error) {
    console.log("comments 추가 중 에러 발생", error);
    alert("로그인이 필요한 서비스입니다.");
  }
};

// comment 삭제
const deleteComments = async (props) => {
  const commentId = props.commentsID;
  const token = props.token;
  try {
    await axios.delete(`http://3.36.132.42:8080/api/comment/${commentId}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log("error 발생", error);
  }
};

// comment 수정
const patchComments = async (props) => {
  const commentId = props.commentsID;
  const updateComments = props.updateComments;
  const token = props.token;
  try {
    await axios.patch(
      `http://3.36.132.42:8080/api/comment/${commentId}`,
      {
        comment: updateComments,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log("error 발생", error);
  }
};

export { getComments, deleteComments, patchComments, addComments };
