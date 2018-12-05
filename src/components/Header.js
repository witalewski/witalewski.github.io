import React from 'react';
import styled from '@emotion/styled';
import hero from '../assets/images/hero.jpg';

const HeaderStyled = styled.header`
  width: 100vw;
  height: 70vh;

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-text {
    position: absolute;
    top: 60vh;
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
`;
export const Header = () => (
  <HeaderStyled>
    <img className="hero-image" src={hero} alt="Kris Witalewski" />
    <div className="hero-text">
      <h1 className="title">Kris Witalewski</h1>
      <summary className="description">
        Developing advanced web applications with ES6, React, MobX &amp; Redux
      </summary>
    </div>
  </HeaderStyled>
);
