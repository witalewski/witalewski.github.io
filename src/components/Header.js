import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import hero from '../assets/images/hero.jpg';
import { BREAKPOINT } from '../global/Constants';

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
    max-width: 60vw;
  }

  @media all and (max-width: ${BREAKPOINT}px) {
    margin-top: 48px;
    height: 30vh;

    .hero-text {
      top: 30vh;
    }

    .title {
      display: none;
    }
    .description {
      font-size: 14px;
    }
  }
`;

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
