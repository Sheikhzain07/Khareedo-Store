import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

export default function Header() {
  return (
    <MainHeader>
      <NavLink to="/">
        <img
          width="150px"
          //   height="40px"
          src="https://1000logos.net/wp-content/uploads/2021/12/Zain-logo.png"
          alt="logo"
        />
      </NavLink>
      <Nav />
    </MainHeader>
  );
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`;
