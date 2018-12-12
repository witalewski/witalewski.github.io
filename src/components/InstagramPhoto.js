import React from 'react';
import { InstagramPhotoStyled } from './InstagramPhotoStyled';

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
