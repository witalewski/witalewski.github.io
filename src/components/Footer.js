import React from 'react';
import styled from '@emotion/styled';
import {SocialMediaIcon} from './SocialMediaIcon';
import twitter from '../assets/icons/twitter.png';
import linkedin from '../assets/icons/linkedin.png';
import instagram from '../assets/icons/instagram.png';
import facebook from '../assets/icons/facebook.png';

const FooterStyled = styled.footer`
  .social-media-icon-list {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  .social-media-icon {
    width: 20px;
    height: 20px;
    padding: 20px;
  }
`;
export const Footer = () => (
  <FooterStyled>
    <ul className="social-media-icon-list">
      <li><SocialMediaIcon name="Twitter" href="https://twitter.com/witalewski" source={twitter}/></li>
      <li><SocialMediaIcon name="LinkedIn" href="https://www.linkedin.com/in/witalewski/" source={linkedin}/></li>
      <li><SocialMediaIcon name="Instagram" href="https://www.instagram.com/nihilismislove/" source={instagram}/></li>
      <li><SocialMediaIcon name="Facebook" href="https://www.facebook.com/krzysztof.witalewski" source={facebook}/></li>
    </ul>
  </FooterStyled>
);
