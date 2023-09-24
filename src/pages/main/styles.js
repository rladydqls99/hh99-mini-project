import styled from "styled-components";
import { colors } from "../../color/colors.js";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center; /*수평 가운데 정렬*/
  padding-bottom: 50px;
  gap: 10px;
  border-bottom: 2px solid ${colors.background};
`;

export const StyledInput = styled.div`
  border: 2px solid ${colors.darkColor};
  border-radius: 5px;
  margin-top: 50px;
  padding-inline-start: 10px;
  width: 90%;
  height: 40px;
  max-width: 1170px;
  display: flex;
  align-items: center;
  position: relative; /* 추가: 아이콘 위치 설정을 위해 상대 위치(relative)로 변경 */

  input {
    width: 93%;
    height: 70%;
    outline: none;
    background-color: ${colors.background};
  }
  button {
    margin-left: auto;
    margin-right: 10px;
  }
`;

export const LogoImage = styled.img`
  width: 200px;
  height: 120px;
  margin: auto;
  padding-bottom: 10px;
  padding: 5px;
`;

export const StyledBox = styled.div`
  border: 2px solid ${colors.background};
  border-radius: 10px;
  background-color: white;
  height: 150;
  width: 250px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  div {
    border-top: 1px solid ${colors.background};
    padding-top: 10px;

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
  }
  /* 화면이 작아질 때 크기 조절 */
  width: calc(
    33.3% - 20px
  ); /* 2개의 박스를 한 행에 표시하려면 50%로 설정 (간격 제외) */

  @media (max-width: 768px) {
    width: calc(
      50% - 20px
    ); /* 2개의 박스를 한 행에 표시하려면 50%로 설정 (간격 제외) */
  }

  @media (max-width: 480px) {
    width: 100%; /* 화면이 아주 작아질 때는 100%로 설정하여 한 개의 박스만 표시 */
  }
`;

export const OuterContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: space-between; /* 컨테이너와 사이드 디브 간격을 최대화 */
  max-width: 1170px;
  margin: 0 auto 0 auto;
  padding: 40px;
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
  border-radius: 30px;
  background-color: ${colors.mediumColor};
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap; /* 화면 크기에 따라 자동으로 다음 행으로 이동 */
  gap: 20px; /* 각 div 사이의 간격 조절 */
  width: 100%; /* 화면 가로폭에 맞추기 */
  justify-content: flex-start; /* 왼쪽 정렬 */
  position: relative; /* 위치 지정을 위해 부모 요소를 상대 위치로 설정합니다. */
`;
// !outerContainer와 container의 차이

export const SideDiv = styled.div`
  width: 300px; /* 초기 너비 설정 */
  background-color: ${colors.pointColor}; /* 배경색 설정 */
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

// 페이지네이션 관련 css
export const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: black;
  padding: 1px;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: white;
  position: absolute;
  top: 100%;
  left: 40%;
`;

export const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

export const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;
