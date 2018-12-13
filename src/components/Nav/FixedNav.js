import React, { useEffect, useState } from 'react';
import { BREAKPOINT } from '../../global/Constants';
import { FixedNavStyled } from './FixedNavStyled';

export const FixedNav = ({ items }) => {
  const [useSmallHeader, setUseSmallHeader] = useState(
    window.innerWidth <= BREAKPOINT
  );

  const scrollHandler = () => {
    const y = window.pageYOffset || document.documentElement.scrollTop;
    setUseSmallHeader(
      y + 60 > window.innerHeight * 0.6 || window.innerWidth <= BREAKPOINT
    );
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  });

  return (
    <FixedNavStyled style={{ display: useSmallHeader ? 'flex' : 'none' }}>
      <h1 className="title">Kris Witalewski</h1>
      <ul className="list">
        {items.map(({ label, href }) => (
          <li key={label} className="list-item">
            <a className="link" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </FixedNavStyled>
  );
};
