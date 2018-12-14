import React, { useState, createRef } from 'react';
import { ImageBreakStyled } from './ImageBreakStyled';
import { useWindowEffect } from '../../effects/useWindowEffect';

const getOffsetFromBoundingClientRec = bcr =>
  (bcr.y - 60 + bcr.height) / (window.innerHeight - 60 + bcr.height);

const compressOffset = (offset, minOffset, maxOffset) =>
  Math.min(maxOffset, Math.max(maxOffset * (offset - minOffset), minOffset));

const getOffset = (ref, minOffset, maxOffset) =>
  ref.current &&
  compressOffset(
    getOffsetFromBoundingClientRec(ref.current),
    minOffset,
    maxOffset
  );

export const ImageBreak = ({ src, minOffset = 0, maxOffset = 100 }) => {
  const imageRef = createRef();
  const [offset, setOffset] = useState(0);

  useWindowEffect(() => setOffset(getOffset(imageRef, minOffset, maxOffset)));

  return (
    <ImageBreakStyled>
      <img
        ref={imageRef}
        className="break-image"
        style={{
          objectPosition: `0 ${offset}%`,
        }}
        src={src}
        alt="Kris Witalewski"
      />
    </ImageBreakStyled>
  );
};
