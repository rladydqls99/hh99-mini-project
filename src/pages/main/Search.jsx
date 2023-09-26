import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  OuterContainer,
  Container,
  StyledDiv,
  StyledInput,
  MainContainer,
} from "./styles";
import DisplayCompanies from "./DisplayCompanys";
import axios from "axios";
import { Magnifier } from "../../icon/icons";

function Search() {
  const navigate = useNavigate();
  const location = useLocation();

  // 기업 검색하는 검색창 컨트롤
  const [companyName, setCompanyName] = useState("");
  const searchOnChange = (e) => {
    const { value } = e.target;
    setCompanyName(value);
  };
  console.log(location);
  const goCompanyDetail = async (companyNames) => {
    try {
      const response = await axios.get(
        `https://miniproject.kro.kr/api/company?name=${companyNames}`
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
          <button onClick={() => goCompanyDetail(companyName)}>
            <Magnifier />
          </button>
        </StyledInput>
      </StyledDiv>
      <MainContainer>
        <OuterContainer>
          <Container>
            {location.state.length === 0 ? (
              <div>검색 결과가 없습니다.</div>
            ) : (
              location.state?.map((company) => {
                return (
                  <>
                    <DisplayCompanies
                      companyId={company.id}
                      companyName={company.companyName}
                      location={company.location}
                      logo={company.logoUrl}
                    />
                  </>
                );
              })
            )}
          </Container>
          {/* <SideDiv></SideDiv> */}
        </OuterContainer>
      </MainContainer>
    </>
  );
}

export default Search;
