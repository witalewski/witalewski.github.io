import React from 'react';
import { Medium } from 'components/Medium';
import { Bio } from 'components/Bio';
import avatar from 'assets/avatar.jpg';
import {
  TitleStyled,
  SectionsStyled,
  SectionTitle,
  AvatarStyled,
} from './MainStyled';

export const Main = () => (
  <SectionsStyled>
    <AvatarStyled src={avatar} alt="Adam Witalewski | Avatar | Photo" />
    <TitleStyled>Adam Witalewski</TitleStyled>
    <Bio />
    <SectionTitle>Writing</SectionTitle>
    <Medium />
  </SectionsStyled>
);

export default Main;
