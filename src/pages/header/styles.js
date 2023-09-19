import styled from "styled-components";

export const StyledNav = styled.nav`
  margin-bottom: 0px;
  z-index: 999;
  top: 0;
  right: auto;
  bottom: auto;
  width: 100%;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  border: none;
  border-bottom: none;
  position: fixed;
`;

export const StyledUl = styled.ul`
  display: flex;
  background: #fff;
  border-radius: 0.28571429rem;
  min-height: 2.42em;

  li {
    flex: 0 0 auto;
    list-style: none;
    padding: 0.71em 1.14285714em;

    cursor: pointer;
  }
  .mypage {
    margin-left: auto;
  }
`;
