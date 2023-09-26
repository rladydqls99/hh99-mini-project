import styled from "styled-components";

export const ModalFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 세로 중앙 정렬을 위해 추가 */
  position: fixed; /* 화면 스크롤에 영향을 받지 않도록 고정 위치로 설정 */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 뒷 배경을 흐릿하게 만듦 */
  z-index: 999; /* 모달을 다른 요소 위에 표시하기 위해 z-index 설정 */
`;

export const ModalSetUp = styled.div`
  font-size: 25px;
  font-weight: bold;
  width: 600px; /* 모달의 너비를 조절 */
  height: 200px;
  display: flex;
  flex-direction: column;

  padding: 30px;
  background-color: white;
  border-radius: 20px;
  position: relative; /* 상대 위치 설정 */
  z-index: 1000; /* 모달 내부 요소를 위한 z-index 설정 */

  button {
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
