import React, { useState } from "react";

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
    <div>
      {isEditMode ? (
        <>
          <input
            type="text"
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          />
          <button onClick={handleSaveClick}>저장</button>
          <button onClick={handleCancelClick}>취소</button>
        </>
      ) : (
        <p>댓글: {comment}</p>
      )}
      <div>
        <button onClick={handleEditClick}>수정</button>
        <button onClick={onDelete}>삭제</button>
      </div>
    </div>
  );
}

export default Comment;
