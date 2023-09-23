import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { kakaoLogin } from "../../api/login";

function Kakao() {
  const navigate = useNavigate();
  const { code } = useParams();

  // useSearchParams 훅을 사용하여 쿼리 매개변수를 읽어옴
  const [searchParams] = useSearchParams();
  const { data } = useQuery("comments", () => kakaoLogin(codeParam));

  // code 값을 쿼리 매개변수로부터 가져옴
  const codeParam = searchParams.get("code");

  useEffect(() => {
    // code 변수를 사용하여 카카오 로그인 콜백 코드를 확인하고 처리
    console.log("카카오 콜백 코드:", codeParam);

    // 필요한 작업을 수행한 후 원하는 경로로 리다이렉션
  }, [navigate, codeParam]);

  return <div>카카오 로그인 처리 중...</div>;
}

export default Kakao;
