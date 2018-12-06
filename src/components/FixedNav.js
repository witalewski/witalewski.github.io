import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { BREAKPOINT } from '../global/Constants';

const FixedNavStyled = styled.header`
  display: flex;
  align-items: center;

  position: fixed;
  top: 0px;
  width: 100vw;
  height: 60px;
  background: white;

  border-bottom: 1px solid #d1d5da;

  .title {
    margin: 16px;
  }

  .list {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    list-style: none;
    margin: 0 16px;
    padding: 0;
  }

  .list-item {
    margin: 8px;
  }

  .link,
  .link:active,
  .link:visited {
    color: #0366d6;
    font-weight: bold;
  }

  .fixed-header-title {
    margin: 0;
    font-size: 20px;
    margin-left: 24px;
  }
  @media all and (max-width: ${BREAKPOINT}px) {
    height: 48px;

    .title,
    .link {
      font-size: 14px;
      padding: 0;
      margin: 8px;
    }
  }
`;

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
