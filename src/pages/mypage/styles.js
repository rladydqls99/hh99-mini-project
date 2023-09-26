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

// 정보 뜨는 곳
export const InfoDiv = styled.div`
  width: 40%;
  height: 380px;
  border-radius: 30px;
  background-color: white;
`;

// 아이콘 감싸는 div
export const IconDiv = styled.div`
  margin-top: 8%;
  display: flex;
  justify-content: center;
`;

// 인삿말 감싸는 div
export const GreetingDiv = styled.div`
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

//모달 버튼
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
  height: 37%;
  position: relative;
  top: 0px;
  background-color: white;
  margin: 20%;
  padding: 50px 100px;
  border-radius: 10px;
`;

export const MypageInput = styled.input`
  border: none; //기본 속성 초기화
  border-bottom: 1px solid;
  outline: none; // 포커스 시 테두리 없애기
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
`;

export const ChangeButton = styled.button`
  background-color: ${(props) => props["back-color"]};
  width: 50%;
  color: white;
  margin-top: 10%;
  padding: 5px;
  border: 18px solid white;
  border-radius: 35px;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#dddddd"};
  }
`;

export const MarginTop = styled.div`
  margin-top: 5%;
`;
