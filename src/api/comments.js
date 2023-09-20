import axios from "axios";
import { getCookie } from "../cookies/cookies";

const token = getCookie("token");
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
  const detailId = props.detailId;
  const newComment = props.newComments;

  try {
    await axios.post(
      `http://3.36.132.42:8080/api/comment`,
      {
        detailid: detailId,
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
  }
};

// comment 삭제
const deleteComments = async (commentID) => {
  try {
    await axios.delete(`http://3.36.132.42:8080/api/comment/${commentID}`, {
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
  const commentID = props.commentsID;
  const updateComments = props.updateComments;
  try {
    await axios.patch(
      `http://3.36.132.42:8080/api/comment/${commentID}`,
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
