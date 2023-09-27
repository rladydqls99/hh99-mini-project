import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props["back-color"]};
`;

export const ContainerDiv = styled.div`
  width: 1170px;
  margin: auto;
  @media screen and (max-width: 780px) {
    width: 100%;
  }

  @media screen and (max-width: 488px) {
    width: 100%;
  }
`;

export const FlexForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 1400px) {
    margin-right: 20%;
  }
  @media screen and (max-width: 780px) {
    margin-right: 30%;
  }
  @media screen and (max-width: 600px) {
    margin-right: 4%;
  }
  @media screen and (max-width: 488px) {
    margin-right: 1%;
  }
`;

export const BorderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60%;
  padding: 80px;
  background-color: white;
  border-radius: 30px;
  @media screen and (max-width: 780px) {
    height: 60%;
    width: 72%;
  }

  @media screen and (max-width: 488px) {
    height: 50%;
    width: 74%;
    margin: auto;
    padding: 10px;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 22%;
  z-index: 10;
  @media screen and (max-width: 780px) {
    top: 18%;
  }

  @media screen and (max-width: 488px) {
    top: 16%;
  }
`;
export const InputContent = styled.input`
  width: 300px;
  height: 45.5px;
  margin-bottom: 10px;
  padding: 5px;
  @media screen and (max-width: 780px) {
    width: 300px;
  }

  @media screen and (max-width: 488px) {
    width: 200px;
    height: 30px;
    font-size: 9px;
    margin-bottom: 20px;
  }
`;

export const ButtonStyle = styled.button`
  width: 300px;
  height: 45.5px;
  margin-top: 16px;
  margin-bottom: -30px;

  background-color: ${(props) => props["back-color"]};
  color: ${(props) => props["font-color"]};
  border-color: transparent;
  border-radius: 5px;
  @media screen and (max-width: 780px) {
    width: 300px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 488px) {
    width: 200px;
    height: 30px;
    font-size: 8px;
    padding: 1px;
  }
`;

export const KakaoButton = styled.button`
  margin-top: 35px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 780px) {
    width: 400px;
  }

  @media screen and (max-width: 488px) {
    width: 200px;
    padding-top: 2px;
    padding-bottom: 2px;
  }
`;
