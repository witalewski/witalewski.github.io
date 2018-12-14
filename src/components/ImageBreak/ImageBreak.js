import React, { useState, createRef } from 'react';
import { ImageBreakStyled } from './ImageBreakStyled';
import { useWindowEffect } from '../../effects/useWindowEffect';

const getOffset = imageRef =>
  imageRef.current
    ? (bcr =>
        (bcr.y - 60 + bcr.height) / (window.innerHeight - 60 + bcr.height))(
        imageRef.current.getBoundingClientRect()
      )
    : 0;
export const ImageBreak = ({ src, maxOffset = 100, minOffset = 0 }) => {
  const imageRef = createRef();
  const [offset, setOffset] = useState(getOffset(imageRef));

  useWindowEffect(() => setOffset(getOffset(imageRef)));

  return (
    <ImageBreakStyled>
      <img
        ref={imageRef}
        className="break-image"
        style={{
          objectPosition: `0 ${Math.min(
            maxOffset,
            Math.max(maxOffset * (offset - minOffset), minOffset)
          )}%`,
        }}
        src={src}
        alt="Kris Witalewski"
      />
    </ImageBreakStyled>
  );
};
