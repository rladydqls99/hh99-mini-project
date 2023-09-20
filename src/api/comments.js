import axios from "axios";

// comments 리스트 가져오기
const getComments = async () => {
  try {
    const response = await axios.get(
      // "http://3.36.132.42:8080/api/comment"
      "http://localhost:4000/comments"
    );
    return response.data;
  } catch (error) {
    console.log("error 발생", error);
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

export { getComments, deleteComments, patchComments };
