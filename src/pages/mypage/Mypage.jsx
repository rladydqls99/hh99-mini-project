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
  MypageButton,
  Modal,
  ModalOverlay,
  ModalContent,
  MypageInput,
  IconFlex,
  FontSize,
  ChangeButton,
  MarginTop,
} from "./styles";
import { Background } from "../authentication/styles";
import { useState } from "react";
import { getCookie } from "../../cookies/cookies";
import { LoginIcon } from "../../icon/icons";
import { CheckIcon } from "../../icon/icons";
import { colors } from "../../color/colors";

function Mypage() {
  const [changeNickname, setChangeNickname] = useState("");
  const { memberId } = useParams();
  const token = getCookie("token");
  const queryClient = useQueryClient();
  const [modal, setModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [message, setMessage] = useState("");

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
  const nicknameMutation = useMutation(patchNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries("members");
    },
  });

  const onNicknameClickButtonHandler = () => {
    setMessage("");

    if (data?.nickname === changeNickname) {
      setMessage(
        "현재 닉네임과 동일한 닉네임입니다. \n다른 닉네임을 입력해주세요."
      );
      return;
    } else {
      setMessage("");
    }

    if (!changeNickname || changeNickname.length === 0) {
      setMessage("변경하실 닉네임을 입력해주세요.");
      return;
    } else {
      setMessage("");
    }

    nicknameMutation.mutate({ memberId, changeNickname, token });
    alert("닉네임 변경이 완료되었습니다!");
    setChangeNickname("");
  };

  const onNicknameChange = (e) => {
    setChangeNickname(e.target.value);
  };

  // 모달
  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModalSecond = () => {
    setSecondModal(!secondModal);
    setChangeNickname("");
    setMessage("");
  };

  const modalButtonHandler = () => {
    onNicknameClickButtonHandler();
    if (
      data?.nickname !== changeNickname &&
      changeNickname &&
      changeNickname.length > 0
    ) {
      toggleModalSecond();
    }
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
                    <MypageButton onClick={toggleModal}>
                      회원정보 확인
                    </MypageButton>
                    {modal && (
                      <Modal>
                        <ModalOverlay onClick={toggleModal}></ModalOverlay>
                        <ModalContent>
                          <IconFlex>
                            <button onClick={toggleModal}>
                              <CheckIcon />
                            </button>
                          </IconFlex>
                          <FontSize>
                            <div>닉네임: {data.nickname} </div>
                            <div>이메일: {data.email}</div>
                          </FontSize>
                        </ModalContent>
                      </Modal>
                    )}
                  </Flexbox>

                  <Flexbox>
                    <MypageButton onClick={toggleModalSecond}>
                      회원정보 변경
                    </MypageButton>
                    {secondModal && (
                      <Modal>
                        <ModalOverlay
                          onClick={toggleModalSecond}
                        ></ModalOverlay>
                        <ModalContent>
                          <FontSize>
                            <MarginTop>
                              <div>현재 닉네임: {data.nickname} </div>
                              <div>
                                변경 할 닉네임:{" "}
                                <MypageInput
                                  value={changeNickname}
                                  onChange={onNicknameChange}
                                />
                                &nbsp;
                              </div>
                            </MarginTop>
                            <div>
                              {message && (
                                <div style={{ color: "red", fontSize: "20px" }}>
                                  {message}
                                </div>
                              )}
                              <ChangeButton
                                back-color={"#4f709c"}
                                hoverColor={"#456692"}
                                onClick={toggleModalSecond}
                              >
                                취소하기
                              </ChangeButton>
                              <ChangeButton
                                back-color={"#e393b9"}
                                hoverColor={"#d989af"}
                                onClick={modalButtonHandler}
                              >
                                변경하기
                              </ChangeButton>
                            </div>
                          </FontSize>
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
