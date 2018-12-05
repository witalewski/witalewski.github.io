import React from 'react';
import styled from '@emotion/styled';

const InstagramPhotoStyled = styled.div`
  .thumbnail {
    width: 100%;
  }
`;
export const InstagramPhoto = ({ photo }) => (
  <InstagramPhotoStyled>
    <a href={photo.link}>
      <img
        className="thumbnail"
        src={photo.images.low_resolution.url}
        alt={photo.caption || 'Instagram Feed Item'}
      />
    </a>
  </InstagramPhotoStyled>
);
