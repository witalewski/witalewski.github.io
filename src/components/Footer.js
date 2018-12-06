import React from 'react';
import styled from '@emotion/styled';
import {SocialMediaIcon} from './SocialMediaIcon';
import twitter from '../assets/icons/twitter.png';
import linkedin from '../assets/icons/linkedin.png';

const FooterStyled = styled.footer`
  .social-media-icon-list {
    margin: 48px 0;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;
  }
`;
export const Footer = () => (
  <FooterStyled>
    <ul className="social-media-icon-list">
      <li><SocialMediaIcon name="LinkedIn" href="https://www.linkedin.com/in/witalewski/" source={linkedin}/></li>
      <li><SocialMediaIcon name="Twitter" href="https://twitter.com/witalewski" source={twitter}/></li>
    </ul>
  </FooterStyled>
);
