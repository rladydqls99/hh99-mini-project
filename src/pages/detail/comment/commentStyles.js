import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
`;
const CommentP = styled.p`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
`;

const CommentButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const CommentButton = styled.button`
  flex-grow: 1;
  padding: 10px;
  background-color: #007bff;
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
};
