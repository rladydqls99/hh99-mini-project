import styled from "styled-components";

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

export const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const InputContent = styled.input`
  width: 430px;
  height: 45.5px;
  margin-top: 14px;
  @media screen and (max-width: 780px) {
    width: 390px;
  }

  @media screen and (max-width: 488px) {
    width: 370pxs;
  }
`;

export const ButtonStyle = styled.button`
  width: 440px;
  height: 50px;
  margin-top: 10px;
  background-color: ${(props) => props["back-color"]};
  color: white;
  border-color: transparent;
  border-radius: 10px;
  @media screen and (max-width: 780px) {
    width: 400px;
  }

  @media screen and (max-width: 488px) {
    width: 380pxs;
  }
`;
