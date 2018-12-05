import React from 'react';
import styled from '@emotion/styled';

const SocialMediaIconStyled = styled.div`
  .icon-image {
    width: 20px;
    height: 20px;
    padding: 20px;
  }
`;
export const SocialMediaIcon = ({name, href, source}) => (
  <SocialMediaIconStyled>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="icon-image"
            src={source}
            alt={`Kris Witalewski on ${name}`}
          />
        </a>
  </SocialMediaIconStyled>
);
