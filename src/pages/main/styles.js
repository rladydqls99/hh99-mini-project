import styled from "styled-components";
import { colors } from "../../color/colors.js";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center; /*수평 가운데 정렬*/
  padding-bottom: 10px;
  gap: 10px;
`;

export const StyledInput = styled.div`
  border: 1px solid #4f709c;
  border-radius: 5px;
  margin-top: 10px;
  padding-inline-start: 10px;
  width: 90%;
  height: 60px;
  max-width: 1170px;
  display: flex;
  align-items: center;
  position: relative;

  input {
    width: 93%;
    height: 80%;
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
  border-radius: 10px;
  background-color: white;
  height: 150;
  width: 250px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 6px 24px 0px;

  div {
    border-top: 1px solid #f4f2f1;
    padding-top: 10px;

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
  }

  &:hover {
    transform: scale(1.1); /* 원래 크기의 110%로 확대 */
    transition: transform 0.2s;
    cursor: pointer;
  }
  /* 화면이 작아질 때 크기 조절 */
  width: calc(
    33.3% - 20px
  ); /* 2개의 박스를 한 행에 표시하려면 50%로 설정 (간격 제외) */

  @media (max-width: 480px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const MainContainer = styled.div`
  background-color: ${colors.background};
  border-top: 1px solid #e4e2e1;
  min-height: 100vh;
`;
export const OuterContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: "#f4f2f1";
  max-width: 1170px;
  margin: 0 auto 0 auto;
  padding: 40px;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap; /* 화면 크기에 따라 자동으로 다음 행으로 이동 */
  gap: 20px; /* 각 div 사이의 간격 조절 */
  width: 100%; /* 화면 가로폭에 맞추기 */
  justify-content: flex-start; /* 왼쪽 정렬 */
  position: relative; /* 위치 지정을 위해 부모 요소를 상대 위치로 설정합니다. */
  margin-bottom: 30px;
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
  position: absolute;

  /* 아래 정중앙에 정렬 스타일 추가 */
  left: 50%; /* 왼쪽 위치를 화면 가로 중앙으로 이동 */
  transform: translateX(-50%); /* 다시 왼쪽으로 50%만큼 이동하여 가운데 정렬 */
  bottom: -50px; /* 아래 위치 조절, 필요한 위치로 조절 가능 */
  margin: 0; /* margin 초기화 */
  margin-top: 20px; /* 필요한 상단 마진 설정 */
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
  display: flex;
  flex-direction: row;

  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;
