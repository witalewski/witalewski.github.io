import React from 'react';
import { FooterStyled } from './FooterStyled';
import { SocialMediaIcon } from './SocialMediaIcon';
import twitter from '../assets/icons/twitter.png';
import linkedin from '../assets/icons/linkedin.png';

export const Footer = () => (
  <FooterStyled>
    <ul className="social-media-icon-list">
      <li>
        <SocialMediaIcon
          name="LinkedIn"
          href="https://www.linkedin.com/in/witalewski/"
          source={linkedin}
        />
      </li>
      <li>
        <SocialMediaIcon
          name="Twitter"
          href="https://twitter.com/witalewski"
          source={twitter}
        />
      </li>
    </ul>
  </FooterStyled>
);
