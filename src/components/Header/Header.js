import React, { useState } from 'react';
import { HeaderStyled } from './HeaderStyled';
import { getPageYOffset } from '../../utils/getPageYOffset';
import { useWindowEffect } from '../../effects/useWindowEffect';
import hero from '../../assets/images/hero.jpg';

const getHeaderImageOffset = () =>
  getPageYOffset() / (window.innerHeight * 0.6);

export const Header = () => {
  const [offset, setOffset] = useState(getHeaderImageOffset());

  useWindowEffect(() => setOffset(getHeaderImageOffset()));

  return (
    <HeaderStyled>
      <img
        className="hero-image"
        style={{ objectPosition: `0 calc(${48 - offset * 48}%` }}
        src={hero}
        alt="Kris Witalewski"
      />
      <div className="hero-text">
        <h1 className="title">Kris Witalewski</h1>
        <summary className="description">
          Developing advanced web applications with JavaScript (ES6+), React &amp; Redux + Thunk | MobX
        </summary>
      </div>
    </HeaderStyled>
  );
};
