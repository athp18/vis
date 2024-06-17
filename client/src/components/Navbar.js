import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem;
`;

const Logo = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLink = styled(Link)`
  color: #fff;
  margin-left: 1.5rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to="/">Spreadsheet Viz</Logo>
      <NavLinks>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/user-dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/social-dashboard">Social</NavLink>
        </li>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;