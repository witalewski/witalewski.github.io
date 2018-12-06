import React, { useState, useEffect, createRef } from 'react';
import styled from '@emotion/styled';
import { BREAKPOINT } from '../global/Constants';

const ImageBreakStyled = styled.div`
  .break-image {
    width: 100%;
    height: 200px;

    margin-top: 96px;
    margin-bottom: 96px;

    object-fit: cover;
  }
  @media all and (max-width: ${BREAKPOINT}px) {
    .break-image {
      width: 100%;
      height: 50px;

      margin-top: 24px;
      margin-bottom: 24px;

      object-fit: cover;
    }
  }
`;
export const ImageBreak = ({ src, y }) => {
  const imageRef = createRef();
  const [offset, setOffset] = useState(0);

  const scrollHandler = () => {
    if (imageRef.current) {
      const y = window.pageYOffset || document.documentElement.scrollTop;
      setOffset(
        (y - imageRef.current.getBoundingClientRect().y) / window.innerHeight
      );
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  });

  return (
    <ImageBreakStyled>
      <img
        ref={imageRef}
        className="break-image"
        style={{
          objectPosition: `0 ${
            window.innerWidth > BREAKPOINT ? 75 - y - offset * 25 : 70 - offset * 20
          }%`,
        }}
        src={src}
        alt="Kris Witalewski"
      />
    </ImageBreakStyled>
  );
};
