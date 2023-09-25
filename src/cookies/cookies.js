import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, options) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name) => {
  return cookies.remove(name, { path: "/" });
};

// name: 쿠키 이름, value: 쿠키에 저장할 값, option: 쿠키에 대한 추가 옵션 설정(expires, path, domain)
