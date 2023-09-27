import styled from "styled-components";

export const CommentContainer = styled.div`
  padding: 20px;
  position: relative;
`;

export const CommentInput = styled.div`
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

export const CommentSaveButtons = styled.div`
  display: flex;
  position: relative;
  width: 60px;
  height: 50px;
  justify-content: flex-end;
`;
export const CommentP = styled.p`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  padding-left: 5px;
`;

export const CommentButtons = styled.div`
  display: flex;
  position: relative;
  top: -118px;
  right: -20px;
  gap: 10px;
  justify-content: flex-end;
`;

export const CommentButton = styled.button`
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
