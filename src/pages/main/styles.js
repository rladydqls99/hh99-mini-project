import styled from "styled-components";
import Reactpaginate from "react-paginate";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center; /*수평 가운데 정렬*/
  align-items: center; /* 수직 가운데 정렬 */

  padding-bottom: 30px;
  gap: 10px;
`;

export const StyledInput = styled.div`
  border: 1px solid blue;
  border-radius: 5px;
  font-size: 20px;
  margin-top: 100px;
  padding-inline-start: 10px;
  width: 60%;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative; /* 추가: 아이콘 위치 설정을 위해 상대 위치(relative)로 변경 */

  input {
    border: none;
    width: 90%;
    height: 70%;
    outline: none;
  }
`;

export const LogoImage = styled.img`
  width: 210px;
  height: 120px;
  margin: auto;
`;

export const OuterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between; /* 컨테이너와 사이드 디브 간격을 최대화 */
  max-width: 1170px;
  margin: 0 auto 0 auto;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap; /* 화면 크기에 따라 자동으로 다음 행으로 이동 */
  gap: 20px; /* 각 div 사이의 간격 조절 */
  width: 100%; /* 화면 가로폭에 맞추기 */
  justify-content: flex-start; /* 왼쪽 정렬 */
  position: relative; /* 위치 지정을 위해 부모 요소를 상대 위치로 설정합니다. */
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%; /* 화면 가로폭에 맞추기 */
  justify-content: flex-start; /* 왼쪽 정렬 */
  position: relative;
  flex-direction: column; /* 수직으로 정렬 */
`;

export const StyledBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: calc(25% - 20px);
  max-width: 450px;
  min-height: 250px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  /* 화면이 작아질 때 크기 조절 */
  @media (max-width: 768px) {
    width: calc(
      50% - 20px
    ); /* 2개의 박스를 한 행에 표시하려면 50%로 설정 (간격 제외) */
  }

  @media (max-width: 480px) {
    width: 100%; /* 화면이 아주 작아질 때는 100%로 설정하여 한 개의 박스만 표시 */
  }
`;

export const SideDiv = styled.div`
  width: 300px; /* 초기 너비 설정 */
  background-color: #f0f0f0; /* 배경색 설정 */
  /* 기타 스타일을 원하는 대로 추가하세요. */

  /* 화면 폭이 990px보다 좁아질 때 SideDiv를 숨깁니다. */
  @media (max-width: 990px) {
    display: none;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 9px; /* 원하는 위치로 조정 */
  left: 92%; /* 원하는 위치로 조정 */
`;

export const StyledReactpaginate = styled(Reactpaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 30px; /* 페이지네이션과 내용 사이 여백 조절 */

  ul.paginationBtn {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0 5px; /* 페이지 버튼 사이 여백 조절 */
      display: inline-block;

      a {
        text-decoration: none;
        padding: 10px 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #333;
        background-color: #f0f0f0;
        cursor: pointer;

        &:hover {
          background-color: #ddd;
        }
      }

      &.selected a {
        background-color: #007bff;
        color: white;
      }

      &.previous a,
      &.next a {
        background-color: #007bff;
        color: white;
      }

      &.break a {
        cursor: default;
      }
    }
  }
`;
