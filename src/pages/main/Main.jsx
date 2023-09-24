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
import { searchCompany } from "../../api/main";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Main() {
  const navigate = useNavigate();
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
