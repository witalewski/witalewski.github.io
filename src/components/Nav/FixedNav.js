import React, { useState } from 'react';
import { BREAKPOINT } from '../../global/Constants';
import { getPageYOffset } from '../../utils/getPageYOffset';
import { FixedNavStyled } from './FixedNavStyled';
import { useWindowEffect } from '../../effects/useWindowEffect';

const getUseSmallHeader = () =>
  getPageYOffset() + 60 > window.innerHeight * 0.6 ||
  window.innerWidth <= BREAKPOINT;

export const FixedNav = ({ items }) => {
  const [useSmallHeader, setUseSmallHeader] = useState(getUseSmallHeader());

  useWindowEffect(() => setUseSmallHeader(getUseSmallHeader()));

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
