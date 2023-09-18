import axios from "axios";

// comments 리스트 가져오기
const getComments = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/comments`
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
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/comments/${commentsID}`,
    updateComments
  );
};

export { getComments, deleteComments, patchComments };
