import React, { useState } from "react";
import {
  CommentContainer,
  CommentInput,
  CommentP,
  CommentButtons,
  CommentSaveButtons,
} from "./commentStyles";
import { getCookie } from "../../../cookies/cookies";
import base64 from "base-64";
import DropdownBtn from "./component/Dropdown";

function Comment({ comment, onEdit, onDelete, memberId }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedComment, setEditedComment] = useState(comment);

  // 토큰 디코딩
  const token = getCookie("token");
  let dec = "";
  if (token) {
    const payload = token.substring(
      token.indexOf(".") + 1,
      token.lastIndexOf(".")
    );
    dec = JSON.parse(base64.decode(payload));
  }

  // input 태그 관리
  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    onEdit(editedComment);
    setIsEditMode(false);
  };

  return (
    <CommentContainer>
      {dec.member_id === memberId ? (
        isEditMode ? (
          <>
            <CommentInput>
              <textarea
                type="text"
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
              />

              <CommentSaveButtons>
                <button onClick={handleSaveClick}>저장</button>
              </CommentSaveButtons>
            </CommentInput>
          </>
        ) : (
          <>
            <CommentP>댓글: {comment}</CommentP>
            <CommentButtons>
              <DropdownBtn
                handleEditClick={handleEditClick}
                onDelete={onDelete}
              />
            </CommentButtons>
          </>
        )
      ) : (
        <>
          <CommentP>댓글: {comment}</CommentP>
          <CommentButtons>{/* 아무 버튼도 출력하지 않음 */}</CommentButtons>
        </>
      )}
    </CommentContainer>
  );
}

export default Comment;
