import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9fb;
  border-radius: 12px;
  max-width: 1170px;
  margin: 30px auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledCommentsDiv = styled.div`
  position: relative;
  top: 20px;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
  max-width: 1170px;
  margin: 30px auto;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333; /* 텍스트 색상 지정 */
  }

  button {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #0056b3;
    }
  }
  textarea {
    width: 100%;
    height: 100px;
    padding: 10px 0px 0px 10px;
  }
`;

const StyledComment = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #007bff;
    }
  }
`;

const BlurDiv = styled.div`
  position: relative;

  .btn {
    display: block; /* 버튼을 블록 레벨 요소로 설정 */
    margin: 20px auto; /* 가로 중앙 정렬 */
  }
`;
const Blur = styled.div`
  position: absolute;
  top: 20;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1); /* 흐린 투명 배경 색상 및 투명도 설정 */
  backdrop-filter: blur(5px); /* 흐림 효과 적용 (원하는 정도로 조정) */
  z-index: 1; /* 다른 컴포넌트 위에 나타나도록 설정 (원하는 숫자로 조정) */
`;

export { Container, StyledCommentsDiv, StyledComment, BlurDiv, Blur };
