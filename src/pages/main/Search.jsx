import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  OuterContainer,
  MiddleContainer,
  Container,
  SideDiv,
  StyledDiv,
  StyledInput,
} from "./styles";
import DisplayCompanies from "./DisplayCompanys";
import axios from "axios";

function Search() {
  const navigate = useNavigate();
  const location = useLocation();

  // 기업 검색하는 검색창 컨트롤
  const [companyName, setCompanyName] = useState("");
  const searchOnChange = (e) => {
    const { value } = e.target;
    setCompanyName(value);
  };

  const goCompanyDetail = async (companyNames) => {
    try {
      const response = await axios.get(
        `http://3.36.132.42:8080/api/company?name=${companyNames}`
      );
      if (response.data.content) {
        navigate(location.pathname, { state: response.data.content });
      }
    } catch (error) {
      console.log("검색결과가 없습니다", error);
    }
  };

  return (
    <>
      <StyledDiv>
        <StyledInput>
          <input
            onChange={searchOnChange}
            type="text"
            placeholder="검색어를 입력하세요"
          />
          <button onClick={() => goCompanyDetail(companyName)}>검색</button>
        </StyledInput>
      </StyledDiv>
      <OuterContainer>
        <Container>
          {location.state.map((company) => {
            return (
              <>
                <DisplayCompanies
                  key={company.id}
                  companyId={company.id}
                  companyName={company.companyName}
                  location={company.location}
                  logo={company.logoUrl}
                />
              </>
            );
          })}
        </Container>
        <SideDiv>this</SideDiv>
      </OuterContainer>
    </>
  );
}

export default Search;
