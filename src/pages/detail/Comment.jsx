import React, { useState } from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;
const CommentP = styled.p`
  width: 100%;
  height: 100px;
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

function Comment({ comment, onEdit, onDelete }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedComment, setEditedComment] = useState(comment);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    onEdit(editedComment);
    setIsEditMode(false);
  };

  const handleCancelClick = () => {
    setEditedComment(comment);
    setIsEditMode(false);
  };

  return (
    <CommentContainer>
      {isEditMode ? (
        <>
          <CommentInput
            type="text"
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          />
          <CommentButtons>
            <CommentButton onClick={handleSaveClick}>저장</CommentButton>
            <CommentButton onClick={handleCancelClick}>취소</CommentButton>
          </CommentButtons>
        </>
      ) : (
        <>
          <CommentP>댓글: {comment}</CommentP>
          <CommentButtons>
            <CommentButton onClick={handleEditClick}>수정</CommentButton>
            <CommentButton onClick={onDelete}>삭제</CommentButton>
          </CommentButtons>
        </>
      )}
    </CommentContainer>
  );
}

export default Comment;
