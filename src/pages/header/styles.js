import styled from "styled-components";
import { colors } from "../../color/colors.js";

export const Navbar = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  padding: 4px 0;
  color: ${colors.background};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.07);
  transition: color 0.3s;
  border-top: 1px double ${colors.darkColor};
  border-bottom: 1px double ${colors.darkColor};
  margin-top: 3px;

  &:hover,
  &:focus {
    color: #4d4d4d;
  }

  &.dark {
    background-color: #3d3d3d;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  flex-grow: 1;
`;

export const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

export const ButtonToggle = styled.button`
  display: block;
  border: 0;
  background-color: transparent;
  padding: 0 8px;
  color: ${colors.darkColor};
  outline: none;

  &.dark {
    color: #c0c0c0;
  }
`;

export const VisibleContainer = styled.div`
  display: none;
  flex-grow: 1;
  flex-basis: 100%;
  align-items: center;
  margin-top: 2rem; /* mt-2 */
  flex-grow: 1;

  @media (min-width: 1024px) {
    /* lg: */
    display: flex;
    flex-basis: auto;
    margin-top: 0;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding-left: 0;

  &.lg {
    flex-direction: row;
    margin-top: 4px;
  }
`;

export const NavItem = styled.li`
  margin: 16px 0 16px 8px;

  &.lg {
    margin: 0 8px 0 4px;
  }
`;

export const NavLink = styled.a`
  color: ${colors.darkColor};
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: #4d4d4d;
  }

  &.disabled {
    color: rgba(0, 0, 0, 0.3);
  }

  &.dark {
    color: #c0c0c0;

    &:hover,
    &:focus {
      color: #666666;
    }

    &.active {
      color: #666666;
    }
  }

  &.active {
    color: rgba(0, 0, 0, 0.9);
  }
`;
