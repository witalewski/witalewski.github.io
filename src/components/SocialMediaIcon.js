import React from 'react';
import { SocialMediaIconStyled } from './SocialMediaIconStyled';

export const SocialMediaIcon = ({ name, href, source }) => (
  <SocialMediaIconStyled>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        className="icon-image"
        src={source}
        alt={`Kris Witalewski on ${name}`}
      />
    </a>
  </SocialMediaIconStyled>
);
