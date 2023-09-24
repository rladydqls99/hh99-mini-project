import React, { useEffect, useState } from "react";
import { getCompany } from "../../api/main";
import { useQuery } from "react-query";
import Pagination from "./pagination";
import {
  StyledDiv,
  StyledInput,
  OuterContainer,
  Container,
  SideDiv,
} from "./styles";
import DisplayCompanies from "./DisplayCompanys";

function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const { isError, isLoading, data } = useQuery(
    ["pagination", currentPage, postsPerPage],
    () => getCompany(currentPage - 1, postsPerPage)
  );

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    if (data) {
      setCompanies(data.content);
    }
  }, [data]);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = companies.slice(indexOfFirst, indexOfLast);

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
        <Container>
          {companies?.map((company) => {
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
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data?.totalElements || 0}
            paginate={setCurrentPage}
          ></Pagination>
        </Container>
        <SideDiv></SideDiv>
      </OuterContainer>
    </>
  );
}

export default Main;
