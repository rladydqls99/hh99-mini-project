import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function PatchDetail() {
  const params = useParams();
  const { state } = useLocation();

  // 수정하는 공간 변경
  const [comment, setComment] = useState("");
  const commentOnChange = (e) => {
    const { value } = e.target;
    console.log(value);
  };
  return (
    <div>
      <h3>{state.detailId}</h3>
      <input defaultValue={state.comments} onChange={commentOnChange} />
    </div>
  );
}

export default PatchDetail;
