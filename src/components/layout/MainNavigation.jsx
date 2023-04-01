import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <Header>
      <Logo>
        <img src="kj-dev-icon.png" alt="" />
        <span>KJ Meetups</span>
      </Logo>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Fovorites</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default MainNavigation;

const Header = styled.header`
  background: var(--color-accent);
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 10rem;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  ul {
    display: flex;

    li {
      margin-left: 3rem;
    }

    a {
      color: var(--color-primary);
      font-size: var(--fontSize-nm);
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
  height: 60px;
`;

const Logo = styled.div`
  display: flex;
  height: 100%;
  color: var(--color-text-03);
  align-items: center;

  span {
    white-space: nowrap;
    font-size: var(--fontSize-mid);
    font-weight: 600;
    margin-left: 0.5rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
