import styled from "styled-components";
import { colors } from "../../color/colors.js";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  gap: 10px;
`;

export const StyledInput = styled.div`
  border: 1px solid #4f709c;
  border-radius: 5px;
  margin-top: 10px;
  padding-inline-start: 10px;
  width: 90%;
  height: 60px;
  max-width: 1170px;
  display: flex;
  align-items: center;
  position: relative;

  input {
    width: 93%;
    height: 80%;
    outline: none;
    background-color: ${colors.background};
  }
  button {
    margin-left: auto;
    margin-right: 10px;
  }
`;

export const LogoImage = styled.img`
  width: 200px;
  height: 120px;
  margin: auto;
  padding-bottom: 10px;
  padding: 5px;
`;

export const StyledBox = styled.div`
  border-radius: 10px;
  background-color: white;
  height: 150;
  width: 250px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 6px 24px 0px;

  div {
    border-top: 1px solid #f4f2f1;
    padding-top: 10px;

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
  }

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
    cursor: pointer;
  }

  width: calc(33.3% - 20px);

  @media (max-width: 480px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const MainContainer = styled.div`
  background-color: ${colors.background};
  border-top: 1px solid #e4e2e1;
  min-height: 100vh;
`;
export const OuterContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: "#f4f2f1";
  max-width: 1170px;
  margin: 0 auto 0 auto;
  padding: 40px;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 30px;
`;

export const Icon = styled.div`
  position: absolute;
  top: 9px;
  left: 92%;
`;

export const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: black;
  padding: 1px;
  position: absolute;

  left: 50%;
  transform: translateX(-50%);
  bottom: -50px;
  margin: 0;
  margin-top: 20px;
`;

export const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

export const PageSpan = styled.span`
  display: flex;
  flex-direction: row;

  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;
