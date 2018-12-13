import React, { useState } from 'react';
import { BREAKPOINT } from '../../global/Constants';
import { FixedNavStyled } from './FixedNavStyled';
import { useWindowEvent } from '../../effects/useWindowEvent';

export const FixedNav = ({ items }) => {
  const [useSmallHeader, setUseSmallHeader] = useState(
    window.pageYOffset + 60 > window.innerHeight * 0.6 ||
      window.innerWidth <= BREAKPOINT
  );

  const handleWindowEvent = () => {
    const y = window.pageYOffset || document.documentElement.scrollTop;
    setUseSmallHeader(
      y + 60 > window.innerHeight * 0.6 || window.innerWidth <= BREAKPOINT
    );
  };

  useWindowEvent(handleWindowEvent);

  return (
    <FixedNavStyled className={useSmallHeader || 'hidden'}>
      <ul className="list">
        {items.map(({ label, href }) => (
          <li key={label} className="list-item">
            <a className="link" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <h1 className="title">Kris Witalewski</h1>
    </FixedNavStyled>
  );
};
