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

  .large-nav {
    position: absolute;
    top: 2.5vw;
    left: 2.5vw;
  }

  .large-nav--list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .large-nav--list-item {
    margin: 8px;
  }

  .large-nav--link,
  .large-nav--link:active,
  .large-nav--link:visited {
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
  .small-nav {
    flex-grow: 1;
  }

  .small-nav--list {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    margin: 0 16px;
    padding: 0;
  }

  .small-nav--list-item {
    margin: 8px;
  }

  .small-nav--link,
  .small-nav--link:active,
  .small-nav--link:visited {
    color: black;
    font-weight: bold;
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

  .fixed-header-title {
    margin: 0;
    font-size: 20px;
    margin-left: 24px;
  }
`;

export const Header = () => {
  const [offset, setOffset] = useState(0);

  const [useSmallHeader, setUseSmallHeader] = useState(false);

  const scrollHandler = () => {
    const y = window.pageYOffset || document.documentElement.scrollTop;
    setUseSmallHeader(y + 60 > window.innerHeight * 0.6);
    setOffset(y / (window.innerHeight * 0.6));
    console.log(y + 60, window.innerHeight * 0.6);
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
      <nav className="large-nav">
        <ul className="large-nav--list">
          <li className="large-nav--list-item">
            <a className="large-nav--link" href="#writing">
              Writing
            </a>
          </li>
          <li className="large-nav--list-item">
            <a className="large-nav--link" href="#code">
              Code
            </a>
          </li>
          <li className="large-nav--list-item">
            <a className="large-nav--link" href="#photos">
              Photos
            </a>
          </li>
        </ul>
      </nav>
      {useSmallHeader && (
        <div className="fixed-header">
          <h1 className="fixed-header-title">Kris Witalewski</h1>
          <nav className="small-nav">
            <ul className="small-nav--list">
              <li className="small-nav--list-item">
                <a className="small-nav--link" href="#writing">
                  Writing
                </a>
              </li>
              <li className="small-nav--list-item">
                <a className="small-nav--link" href="#code">
                  Code
                </a>
              </li>
              <li className="small-nav--list-item">
                <a className="small-nav--link" href="#photos">
                  Photos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </HeaderStyled>
  );
};
