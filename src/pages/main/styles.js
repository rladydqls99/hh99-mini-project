import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center; /*수평 가운데 정렬*/
  align-items: center; /* 수직 가운데 정렬 */
  border-bottom: 1px solid gray;
  padding-bottom: 30px;
  gap: 10px;
`;

const StyledInput = styled.input`
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 25px;
  padding-inline-start: 52px;
  position: relative;
  width: 70%;
`;

const StyledUl = styled.ul`
  display: flex;
  background: #fff;

  border-radius: 0.28571429rem;
  min-height: 2.42em;
  max-width: 1170px;
  margin: 30px auto 30px auto;

  li {
    flex: 0 0 auto;
    list-style: none;
    padding: 0.71em 1.14285714em;

    cursor: pointer;
  }
  .mypage {
    margin-left: auto;
  }
`;

const OuterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between; /* 컨테이너와 사이드 디브 간격을 최대화 */
  max-width: 1170px;
  margin: 0 auto 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap; /* 화면 크기에 따라 자동으로 다음 행으로 이동 */
  gap: 20px; /* 각 div 사이의 간격 조절 */
  width: 100%; /* 화면 가로폭에 맞추기 */
  justify-content: flex-start; /* 왼쪽 정렬 */
  position: relative; /* 위치 지정을 위해 부모 요소를 상대 위치로 설정합니다. */
`;

const StyledBox = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  width: calc(25% - 20px);
  max-width: 450px;
  min-height: 250px;

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

const SideDiv = styled.div`
  width: 300px; /* 초기 너비 설정 */
  background-color: #f0f0f0; /* 배경색 설정 */
  /* 기타 스타일을 원하는 대로 추가하세요. */

  /* 화면 폭이 990px보다 좁아질 때 SideDiv를 숨깁니다. */
  @media (max-width: 990px) {
    display: none;
  }
`;
export {
  StyledDiv,
  StyledInput,
  StyledUl,
  Container,
  StyledBox,
  SideDiv,
  OuterContainer,
};
