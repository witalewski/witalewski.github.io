import React, { useState, createRef } from 'react';
import { ImageBreakStyled } from './ImageBreakStyled';
import { useWindowEffect } from '../../effects/useWindowEffect';

const getOffsetFromBoundingClientRec = bcr =>
  (bcr.y - 60 + bcr.height) / (window.innerHeight - 60 + bcr.height);

const getOffset = ref =>
  ref.current && getOffsetFromBoundingClientRec(ref.current);

export const ImageBreak = ({ src, maxOffset = 100, minOffset = 0 }) => {
  const imageRef = createRef();
  const [offset, setOffset] = useState(0);

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
