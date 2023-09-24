import React from "react";
import { StyledBox, LogoImage } from "./styles";
import { useNavigate } from "react-router-dom";

function DisplayCompanies({ companyName, location, companyId }) {
  const navigate = useNavigate();
  // 기업 박스를 누르면 해당 기업 상세 페이지로 이동
  const goDetail = (companyId, companyName, location) => {
    navigate(`/detail/${companyId}`, {
      state: { companyName, location },
    });
  };
  return (
    <StyledBox
      onClick={() => goDetail(companyId, companyName, location)}
      key={companyId}
    >
      <LogoImage src="" />
      <h1>기업명: {companyName}</h1>
      <h3>위치: {location}</h3>
    </StyledBox>
  );
}

export default DisplayCompanies;
