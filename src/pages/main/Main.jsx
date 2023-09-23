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

function Main() {
  // 공통 사용
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
  const companiesPerPage = 3;
  const pagesVisited = pageNumber * companiesPerPage;
  const pageCount = Math.ceil(companies.length / companiesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // 기업 검색하는 검색창 컨트롤
  const [searchCompany, setSearchCompany] = useState("");
  const searchOnChange = (e) => {
    const { value } = e.target;
    setSearchCompany(value);
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
          <input type="text" placeholder="검색어를 입력하세요" />
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
                      companyId={company.id}
                      companyName={company.companyName}
                      location={company.location}
                    />
                  </>
                );
              })}
            <StyledReactpaginate
              previousLabel={"이전"}
              nextLabel={"다음"}
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
