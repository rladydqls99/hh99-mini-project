import axios from "axios";
import { getCookie } from "../cookies/cookies";

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
  console.log(typeof newComment);
  try {
    await axios.post(`http://3.36.132.42:8080/api/comment`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        detailid: parseInt(detailId),
        comment: newComment,
      },
    });
  } catch (error) {
    console.log("comments 추가 중 에러 발생", error);
  }
};

// comment 삭제
const deleteComments = async (comentsID) => {
  try {
    await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/comments/${comentsID}`
    );
  } catch (error) {
    console.log("error 발생", error);
  }
};

// comment 수정
const patchComments = async ({ commentsID, updateComments }) => {
  try {
    await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/comments/${commentsID}`,
      { comment: updateComments }
    );
  } catch (error) {
    console.log("error 발생", error);
  }
};

export { getComments, deleteComments, patchComments, addComments };
