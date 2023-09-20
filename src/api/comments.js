import axios from "axios";

// comments 리스트 가져오기
const getComments = async (companyid) => {
  console.log(typeof companyid);
  const url = `http://3.36.132.42:8080/api/company/1234/comment`;
  console.log(url);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log("error 발생", error);
  }
};

// 댓글 추가하기
const addComments = async ({ newComment, detailId }) => {
  console.log(detailId);
  try {
    await axios.post(`http://3.36.132.42:8080/comment/${detailId}`, newComment);
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
