import styled from "styled-components";

export const ModalFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalSetUp = styled.div`
  font-size: 25px;
  font-weight: bold;
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;

  padding: 30px;
  background-color: white;
  border-radius: 20px;
  position: relative;
  z-index: 1000;

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
