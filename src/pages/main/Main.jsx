import React, { useEffect, useState } from "react";
import { getCompany } from "../../api/main";
import { useQuery } from "react-query";
import Pagination from "./pagination";
import {
  StyledDiv,
  StyledInput,
  OuterContainer,
  Container,
  MainContainer,
} from "./styles";
import DisplayCompanies from "./DisplayCompanys";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Magnifier } from "../../icon/icons";

function Main() {
  const navigate = useNavigate();

  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(21);

  const { isError, isLoading, data } = useQuery(
    ["pagination", currentPage, postsPerPage],
    () => getCompany(currentPage - 1, postsPerPage)
  );

  useEffect(() => {
    if (data) {
      setCompanies(data.content);
    }
  }, [data]);

  // 기업 검색하는 검색창 컨트롤
  const [companyName, setCompanyName] = useState("");
  const searchOnChange = (e) => {
    const { value } = e.target;
    setCompanyName(value);
  };

  // 엔터 눌렀을 때 동작
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      goCompanyDetail(companyName);
    }
  };

  const goCompanyDetail = async (companyNames) => {
    try {
      const response = await axios.get(
        `https://miniproject.kro.kr/api/company?name=${companyNames}`
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
            onKeyDown={(e) => activeEnter(e)}
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
            {companies?.map((company) => {
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
            })}
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={data?.totalElements || 0}
              paginate={setCurrentPage}
              currentPage={currentPage}
            ></Pagination>
          </Container>
        </OuterContainer>
      </MainContainer>
    </>
  );
}

export default Main;
