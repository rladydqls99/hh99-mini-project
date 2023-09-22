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
import DisplayCompanys from "./DisplayCompanys";
import axios from "axios";

function Main() {
  // 공통 사용
  const { isError, isLoading, data } = useQuery("company", getCompany);

  // 페이지 네이션
  const [companys, setCompanys] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    if (data) {
      setCompanys(data.content);
    }
  }, [data]);

  // 페이지당 원하는 수
  const companysPerPage = 3;
  const pagesVisited = pageNumber * companysPerPage;
  const pageCount = Math.ceil(companys.length / companysPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // 페이지네이션
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(`http://3.36.132.42:8080/api/company`);
      setPosts(response.data.content);
      setLoading(false);
    };
    fetchData();
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

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
              .slice(pagesVisited, pagesVisited + companysPerPage)
              .map((company) => {
                return (
                  <>
                    <DisplayCompanys
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
