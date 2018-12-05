import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import hero from '../assets/images/hero.jpg';

const HeaderStyled = styled.header`
  width: 100vw;

  height: 60vh;

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-text {
    position: absolute;
    top: 50vh;
    left: 2.5vw;
    transform: translate(0, -100%);

    display: flex;
    flex-direction: column;

    color: white;
  }

  .title {
    font-size: 48px;
    margin-bottom: 16px;
  }

  .description {
    font-size: 24px;
    max-width: 80vw;
  }

  .fixed-header {
    display: flex;
    align-items: center;

    position: fixed;
    top: 0px;
    width: 100%;
    height: 60px;
    background: white;

    border-bottom: 1px solid #d1d5da;
  }

  .fixed-header-image {
    height: 100%;
    margin-right: 24px;
  }

  .fixed-header-title {
    margin: 0;
    font-size: 20px;
  }
`;

export const Header = () => {
  const [offset, setOffset] = useState(0);

  const [useSmallHeader, setUseSmallHeader] = useState(false);

  const scrollHandler = () => {
    const y = window.pageYOffset || document.documentElement.scrollTop;
    setUseSmallHeader(y + 60 > window.innerHeight * 0.6);
    setOffset(y / (window.innerHeight * 0.6));
    console.log(y+60,window.innerHeight * 0.6);
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
      {useSmallHeader && (
        <div className="fixed-header">
          <img
            className="fixed-header-image"
            src={hero}
            alt="Kris Witalewski"
          />
          <h1 className="fixed-header-title">Kris Witalewski</h1>
        </div>
      )}
    </HeaderStyled>
  );
};
