import React from "react";
import { StyledBox, LogoImage } from "./styles";
import { useNavigate } from "react-router-dom";

function DisplayCompanies({ companyName, location, companyId, logo }) {
  const navigate = useNavigate();
  // 기업 박스를 누르면 해당 기업 상세 페이지로 이동
  const goDetail = (companyId, companyName, location) => {
    navigate(`/detail/${companyId}`, {
      state: { companyName, location, logo },
    });
  };

  return (
    <StyledBox
      onClick={() => goDetail(companyId, companyName, location)}
      key={companyId}
    >
      <LogoImage src={logo} />
      <div>
        <h1>{companyName}</h1>
      </div>
    </StyledBox>
  );
}

export default DisplayCompanies;
