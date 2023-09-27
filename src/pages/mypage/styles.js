import styled from "styled-components";

export const MypageStyle = styled.div`
  width: 1170px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Flexbox = styled.div`
  display: flex;
  justify-content: center;
`;

export const NicknameFlex = styled.div`
  display: flex;
  justify-content: row;
`;

export const InfoDiv = styled.div`
  width: 40%;
  height: 380px;
  border-radius: 30px;
  background-color: white;

  @media screen and (max-width: 1400px) {
    width: 40%;
    height: 300px;
  }

  @media screen and (max-width: 780px) {
    width: 55%;
    height: 500px;
  }

  @media screen and (max-width: 488px) {
    width: 80%;
    height: 280px;
    margin-top: 10%;
  }
`;

export const IconDiv = styled.div`
  margin-top: 8%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1400px) {
    margin-top: 10%;
  }
  @media screen and (max-width: 780px) {
    margin-top: 20%;
  }

  @media screen and (max-width: 488px) {
    margin-top: 30%;
  }
`;

export const GreetingDiv = styled.div`
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
  @media screen and (max-width: 1400px) {
    font-size: 35px;
  }
  @media screen and (max-width: 780px) {
    font-size: 30px;
  }

  @media screen and (max-width: 488px) {
    font-size: 20px;
  }
`;

export const MypageButton = styled.button`
  display: flex;
  justify-content: center;
  width: 70%;
  background-color: #e393b9;
  margin-top: 45px;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  color: white;

  &:hover {
    background-color: #d989af;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 1400px) {
    font-size: 15px;
  }
  @media screen and (max-width: 780px) {
    font-size: 15px;
  }

  @media screen and (max-width: 488px) {
    font-size: 12px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ModalContent = styled.div`
  width: 40%;
  height: 37%;
  position: relative;
  top: 0px;
  background-color: white;
  margin: 20%;
  padding: 50px 100px;
  border-radius: 10px;
  @media screen and (max-width: 1400px) {
    width: 40%;
  }

  @media screen and (max-width: 780px) {
    width: 85%;
    height: 25%;
  }

  @media screen and (max-width: 488px) {
    width: 85%;
    height: 22%;
  }
`;

export const MypageInput = styled.input`
  border: none;
  border-bottom: 1px solid;
  outline: none;
`;

export const IconFlex = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FontSize = styled.div`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1400px) {
    font-size: 18px;
  }

  @media screen and (max-width: 780px) {
    font-size: 16px;
  }

  @media screen and (max-width: 488px) {
    font-size: 14px;
    margin-right: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
`;

export const ChangeButton = styled.button`
  background-color: ${(props) => props["back-color"]};
  width: 50%;
  color: white;
  margin-top: 10%;
  padding: 5px;
  border: 10px solid white;
  border-radius: 35px;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#dddddd"};
  }
  @media screen and (max-width: 1400px) {
    font-size: 18px;
  }

  @media screen and (max-width: 780px) {
    font-size: 16px;
  }

  @media screen and (max-width: 488px) {
    font-size: 12px;
    border: 5px solid white;
    margin-top: 5%;
  }
`;

export const MarginTop = styled.div`
  margin-top: 5%;
`;
