import styled from "styled-components";

const CommentContainer = styled.div`
  padding: 20px;
  position: relative;
`;

const CommentInput = styled.div`
  flex: 1;
  width: 100%;
  flex-direction: row;
  display: flex;

  textarea {
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    outline-color: #4f709c;
    padding-left: 5px;
    resize: none;
  }
`;

const CommentSaveButtons = styled.div`
  display: flex;
  position: relative;
  width: 60px;
  height: 50px;
  justify-content: flex-end; /* 우측 정렬을 추가합니다. */
`;
const CommentP = styled.p`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  padding-left: 5px;
`;

const CommentButtons = styled.div`
  display: flex;
  position: relative;
  top: -118px;
  right: -20px;
  gap: 10px;
  justify-content: flex-end; /* 우측 정렬을 추가합니다. */
`;

const CommentButton = styled.button`
  flex-grow: 1;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export {
  CommentContainer,
  CommentInput,
  CommentP,
  CommentButtons,
  CommentButton,
  CommentSaveButtons,
};
