import React, { useEffect, useState } from 'react';
import { HeaderStyled } from './HeaderStyled';
import hero from '../assets/images/hero.jpg';

export const Header = () => {
  const [offset, setOffset] = useState(0);

  const scrollHandler = () => {
    const y = window.pageYOffset || document.documentElement.scrollTop;
    setOffset(y / (window.innerHeight * 0.6));
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  });

  return (
    <HeaderStyled>
      <img
        className="hero-image"
        style={{ objectPosition: `0 calc(${50 - offset * 50}%` }}
        src={hero}
        alt="Kris Witalewski"
      />
      <div className="hero-text">
        <h1 className="title">Kris Witalewski</h1>
        <summary className="description">
          Developing advanced web applications with ES6, React, MobX &amp; Redux
        </summary>
      </div>
    </HeaderStyled>
  );
};
