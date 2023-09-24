import styled from "styled-components";
import { colors } from "../../color/colors";

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

// 정보 뜨는 곳
export const InfoDiv = styled.div`
  width: 30%;
  height: 200px;
  border-radius: 30px;
  background-color: white;
`;

// 아이콘 감싸는 div
export const IconDiv = styled.div`
  margin-top: 30px;
`;

// 인삿말 감싸는 div
export const GreetingDiv = styled.div`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;

//모달 버튼
export const MypageButton1 = styled.button`
  display: flex;
  justify-content: center;
  width: 300px;
  background-color: ${colors.mediumColor};
  margin-top: 40px;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: rgba(234, 219, 200, 0.7);
  }
`;

export const MypageButton2 = styled.button`
  display: flex;
  justify-content: center;
  width: 300px;
  background-color: ${colors.mediumColor};
  margin-top: 30px;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: rgba(234, 219, 200, 0.7);
  }
`;

export const Modal = styled.div`
  position: fixed; //스크롤 해도 고정됨
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 모달 배경
export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ModalContent = styled.div`
  width: 40%;
  position: relative;
  top: 0px;
  background-color: white;
  padding: 50px 100px;
  border-radius: 10px;
`;

export const MypageInput = styled.input`
  border: 1px solid black;
`;
