import React from "react";
import { getMemberInfo, patchNickname } from "../../api/mypage";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import {
  MypageStyle,
  Flexbox,
  InfoDiv,
  IconDiv,
  GreetingDiv,
  MypageButton1,
  MypageButton2,
  Modal,
  ModalOverlay,
  ModalContent,
  MypageInput,
} from "./styles";
import { Background } from "../authentication/styles";
import { useState } from "react";
import { getCookie } from "../../cookies/cookies";
import { LoginIcon } from "../../icon/icons";
import { colors } from "../../color/colors";

function Mypage() {
  const [changeNickname, setChangeNickname] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const { memberId } = useParams();
  const token = getCookie("token");
  const queryClient = useQueryClient();
  const [modal, setModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);

  // 닉네임,이메일 불러오기
  const { isLoading, isError, data } = useQuery("members", () =>
    getMemberInfo(memberId)
  );

  if (isLoading) {
    <h1>로딩 중입니다..</h1>;
  }

  if (isError) {
    <h1>에러가 발생했습니다.</h1>;
  }

  // 닉네임 변경하기
  // !변경 후 재렌더링 되도록 하고 비밀번호 변경도 가능하도록 하기
  const nicknameMutation = useMutation(patchNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries("members");
      console.log("mutation 성공하셨습니다");
    },
  });

  const onNicknameClickButtonHandler = () => {
    nicknameMutation.mutate({ memberId, changeNickname, token });
    alert("닉네임 변경이 완료되었습니다!");
  };

  const onPasswordClickButtonHandler = () => {
    nicknameMutation.mutate({ memberId, changePassword, token });
    alert("비밀번호 변경이 완료되었습니다!");
  };

  const onNicknameChange = (e) => {
    setChangeNickname(e.target.value);
  };

  const onPasswordChange = (e) => {
    setChangePassword(e.target.value);
  };

  // 모달
  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModalSecond = () => {
    setSecondModal(!secondModal);
  };

  return (
    <>
      <Background back-color={colors.background}>
        <Flexbox>
          <MypageStyle>
            <IconDiv>
              <LoginIcon />
            </IconDiv>
            <GreetingDiv>
              <h2>{data?.nickname}님 안녕하세요!</h2>
            </GreetingDiv>
            {data && (
              <Flexbox>
                <InfoDiv>
                  <Flexbox>
                    <MypageButton1 onClick={toggleModal}>
                      회원정보 확인
                    </MypageButton1>
                    {modal && (
                      <Modal>
                        <ModalOverlay onClick={toggleModal}></ModalOverlay>
                        <ModalContent>
                          <button onClick={toggleModal}>❎</button>
                          <div>닉네임: {data.nickname} </div>
                          <div>이메일: {data.email}</div>
                        </ModalContent>
                      </Modal>
                    )}
                  </Flexbox>

                  <Flexbox>
                    <MypageButton2 onClick={toggleModalSecond}>
                      회원정보 변경
                    </MypageButton2>
                    {secondModal && (
                      <Modal>
                        <ModalOverlay
                          onClick={toggleModalSecond}
                        ></ModalOverlay>
                        <ModalContent>
                          <button onClick={toggleModalSecond}>❎</button>
                          <div>현재 닉네임: {data.nickname} </div>
                          <div>
                            변경 할 닉네임:{" "}
                            <MypageInput
                              value={changeNickname}
                              onChange={onNicknameChange}
                            />
                            &nbsp;
                            <button onClick={onNicknameClickButtonHandler}>
                              변경
                            </button>
                          </div>
                          <div>현재 비밀번호: {data.password} </div>
                          <div>
                            변경 할 비밀번호:{" "}
                            <MypageInput
                              value={changePassword}
                              onChange={onPasswordChange}
                            />
                            &nbsp;
                            <button onClick={onPasswordClickButtonHandler}>
                              변경
                            </button>
                          </div>
                        </ModalContent>
                      </Modal>
                    )}
                  </Flexbox>
                </InfoDiv>
              </Flexbox>
            )}
          </MypageStyle>
        </Flexbox>
      </Background>
    </>
  );
}

export default Mypage;
