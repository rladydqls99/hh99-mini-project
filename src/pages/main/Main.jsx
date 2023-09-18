import React, { useState } from "react";
import { getCompany } from "../../api/main";
import { useQuery } from "react-query";
import {
  StyledDiv,
  StyledInput,
  StyledUl,
  Container,
  StyledBox,
  SideDiv,
  OuterContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";

function Main() {
  // 기업 검색하는 검색창 컨트롤
  const [searchCompany, setSearchCompany] = useState("");
  const searchOnChange = (e) => {
    const { value } = e.target;
    setSearchCompany(value);
  };

  // DB에 있는 기업 리스트 불러오기
  const { isError, isLoading, data } = useQuery("company", getCompany);
  if (isLoading) {
    <div>로딩중..</div>;
  }
  if (isError) {
    <div>에러발생</div>;
    <p>askldjlaskdjaskldjaskldjas</p>;
  }

  // 기업 박스를 누르면 해당 기업 상세 페이지로 이동
  const navigate = useNavigate();
  const goDetail = (companyId, companyName, location) => {
    navigate(`/detail/${companyId}`, {
      state: { companyName, location },
    });
  };

  return (
    <>
      <StyledDiv>
        <StyledInput
          value={searchCompany}
          onChange={searchOnChange}
          placeholder="기업 정보를 검색해보세요."
        />
      </StyledDiv>
      <div>
        <StyledUl>
          <li>직종</li>
          <li>근무지역</li>
        </StyledUl>
      </div>
      <OuterContainer>
        <Container>
          {data?.map((company) => {
            return (
              <StyledBox
                onClick={() =>
                  goDetail(
                    company.detailid,
                    company.companyName,
                    company.location
                  )
                }
                key={company.id}
              >
                <h1>기업명: {company.companyName}</h1>
                <h3>위치: {company.location}</h3>
              </StyledBox>
            );
          })}
        </Container>
        <SideDiv>this</SideDiv>
      </OuterContainer>
    </>
  );
}

export default Main;
