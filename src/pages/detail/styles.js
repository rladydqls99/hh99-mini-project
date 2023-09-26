import styled from "styled-components";
import { colors } from "../../color/colors";

const BackgroundDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.background};
  z-index: -1; /* 다른 컴포넌트보다 아래에 위치하도록 설정 */
`;

const CompanyContainer = styled.div`
  position: relative;
  top: 30px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  max-width: 1170px;
  margin: 0px auto;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  align-items: center;
  gap: 20px;

  div {
    margin-top: 30px;
    border-top: 1px solid ${colors.darkColor};
    padding: 10px 0px 0px 10px;

    h1 {
      font-size: 50px;
      margin-bottom: 20px;
    }
    h3 {
      font-size: 30px;
    }
  }
`;
const CommentDiv = styled.div`
  max-width: 1170px;
  margin: 60px auto 0px auto;
  border-radius: 20px;
  background-color: white;
`;

const Container = styled.div`
  padding: 20px;
  background-color: white;
  position: flex;
  border-radius: 12px;
  max-width: 1170px;
  margin: 0px auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  align-items: center;
  gap: 20px;
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
    background-color: #4f709c;
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
    outline-color: #4f709c;
  }
`;

const StyledComment = styled.div`
  border: 1px solid #4f709c;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;

  .info-container {
    display: flex;
    min-width: 0;
    gap: 0.25rem;

    .user-avatar {
      flex: none;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }

    .user-details {
      flex: auto;

      .user-name {
        font-size: 0.875rem;
        font-weight: 600;
        color: #333;
      }

      .user-email {
        margin-top: 0.25rem;
        font-size: 0.75rem;
        color: #777;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  button {
    background-color: #4f709c;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #4f70aa;
    }
  }
  .profile {
    color: #4f709c;
    background-color: white;
  }
`;

const BlurDiv = styled.div`
  position: relative;
  margin: 20px;

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

  button {
    position: relative;
    top: 20%;
    font-size: 30px;
  }
`;

const DetailLogoImage = styled.img`
  width: 400px;
  height: 100%;

  padding-bottom: 10px;
  padding: 5px;
`;

export {
  Container,
  StyledCommentsDiv,
  StyledComment,
  BlurDiv,
  Blur,
  DetailLogoImage,
  CompanyContainer,
  CommentDiv,
  BackgroundDiv,
};
