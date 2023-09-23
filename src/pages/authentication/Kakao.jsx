import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { kakaoLogin } from "../../api/login";

function Kakao() {
  const navigate = useNavigate();
  // const { code } = useParams();

  // useSearchParams 훅을 사용하여 쿼리 매개변수를 읽어옴
  const [searchParams] = useSearchParams();
  const { data } = useQuery("kakao ", () => kakaoLogin(codeParam));

  // code 값을 쿼리 매개변수로부터 가져옴
  const codeParam = searchParams.get("code");

  useEffect(() => {
    navigate("/");
  }, [navigate, codeParam]);

  return <div>카카오 로그인 처리 중...</div>;
}

export default Kakao;
