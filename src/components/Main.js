import React from "react";
import { Medium } from "./Medium";
import { Github } from "./Github";
import { Instagram } from "./Instagram";
import {
  TitleStyled,
  SectionsStyled,
  SectionTitle,
  AvatarStyled
} from "./MainStyled";
import avatar from "../assets/avatar.jpg";

export const Main = () => (
  <SectionsStyled>
    <AvatarStyled src={avatar} />
    <TitleStyled>Adam Witalewski</TitleStyled>
    <SectionTitle>Writing</SectionTitle>
    <Medium />
    <SectionTitle>Code</SectionTitle>
    <Github />
    <SectionTitle>Photography</SectionTitle>
    <Instagram />
  </SectionsStyled>
);

export default Main;
