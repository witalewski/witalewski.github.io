import React from 'react';
import { Medium } from './Medium';
import { Github } from './Github';
import { Instagram } from './Instagram';
import { Bio } from './Bio';
import {
  TitleStyled,
  SectionsStyled,
  SectionTitle,
  AvatarStyled,
} from './MainStyled';
import avatar from '../assets/avatar.jpg';

export const Main = () => (
  <SectionsStyled>
    <AvatarStyled
      src={avatar}
      alt="Adam Witalewski | Avatar | Photo"
      width="320"
      height="320"
    />
    <TitleStyled>Adam Witalewski</TitleStyled>
    <Bio />
    <SectionTitle>Writing</SectionTitle>
    <Medium />
    <SectionTitle>Code</SectionTitle>
    <Github />
    <SectionTitle>Photography</SectionTitle>
    <Instagram />
  </SectionsStyled>
);

export default Main;
