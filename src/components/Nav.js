import React from 'react';
import styled from '@emotion/styled';
import { BREAKPOINT } from '../global/Constants';

const NavStyled = styled.nav`
  position: absolute;
  top: 2.5vw;
  left: 2.5vw;

  .list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .list-item {
    margin: 8px;
  }

  .link,
  .link:active,
  .link:visited {
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
  @media all and (max-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const Nav = ({ items }) => {
  return (
    <NavStyled>
      <ul className="list">
        {items.map(({ label, href }) => (
          <li key={label} className="list-item">
            <a className="link" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </NavStyled>
  );
};
