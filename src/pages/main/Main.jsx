import React, { useEffect, useState } from "react";
import { getCompany } from "../../api/main";
import { useQuery } from "react-query";
import {
  StyledDiv,
  StyledInput,
  Container,
  SideDiv,
  OuterContainer,
  StyledReactpaginate,
  MiddleContainer,
} from "./styles";
import DisplayCompanies from "./DisplayCompanys";
import { searchCompany } from "../../api/main";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Main() {
  // 공통 사용
  const navigate = useNavigate();
  const { isError, isLoading, data } = useQuery("company", getCompany);

  // 페이지 네이션
  const [companies, setCompanies] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    if (data) {
      setCompanies(data.content);
    }
  }, [data]);

  // 페이지당 원하는 수

  const companiesPerPage = 10; // size
  const pagesVisited = pageNumber * companiesPerPage; // 이전 페이지에서 출력된 개수
  const pageCount = Math.ceil(companies.length / companiesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
        navigate("search", { state: response.data.content });
      }
    } catch (error) {
      console.log("검색결과가 없습니다", error);
    }
  };

  // DB에 있는 기업 리스트 불러오기
  if (isLoading) {
    return <div>로딩중..</div>;
  }
  if (isError) {
    return <div>에러발생</div>;
  }

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
        <MiddleContainer>
          <Container>
            {data.content
              .slice(pagesVisited, pagesVisited + companiesPerPage)
              .map((company) => {
                return (
                  <>
                    <DisplayCompanies
                      key={company.id}
                      companyId={company.id}
                      companyName={company.companyName}
                      location={company.location}
                    />
                  </>
                );
              })}
            <StyledReactpaginate
              previousLabel={"⏪"}
              nextLabel={"⏩"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBtn"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"paginationDisabled"}
            />
          </Container>
        </MiddleContainer>
        <SideDiv>this</SideDiv>
      </OuterContainer>
    </>
  );
}

export default Main;
