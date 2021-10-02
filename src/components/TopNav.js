import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const NavMenuStyles = styled.div`
position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
`;


export default function TopNav() {
  return (
    <NavMenuStyles>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
