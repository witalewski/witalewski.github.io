import React from 'react';
import { NavStyled } from './NavStyled';

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
