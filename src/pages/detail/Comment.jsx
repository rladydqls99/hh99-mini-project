import React, { useState } from "react";
import {
  CommentContainer,
  CommentInput,
  CommentP,
  CommentButtons,
  CommentButton,
} from "./commentStyles";

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
