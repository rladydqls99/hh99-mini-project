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
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 22%;
  z-index: 10;
`;
export const InputContent = styled.input`
  width: 300px;
  height: 45.5px;
  margin-bottom: 10px;
  padding: 5px;
  @media screen and (max-width: 780px) {
    width: 390px;
  }

  @media screen and (max-width: 488px) {
    width: 370pxs;
  }
`;

export const ButtonStyle = styled.button`
  width: 300px;
  height: 45.5px;
  margin-top: 10px;
  margin-bottom: -30px;
  background-color: ${(props) => props["back-color"]};
  color: ${(props) => props["font-color"]};
  border-color: transparent;
  border-radius: 5px;
  @media screen and (max-width: 780px) {
    width: 400px;
  }

  @media screen and (max-width: 488px) {
    width: 380pxs;
  }
`;

export const KakaoButton = styled.button`
  margin-top: 35px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
