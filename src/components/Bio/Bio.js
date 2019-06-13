import React from 'react';
import { BioStyled, ParagraphStyled } from './BioStyled';

export const Bio = () => (
  <BioStyled>
    <ParagraphStyled>Hi!</ParagraphStyled>
    <ParagraphStyled>
      My name is Adam (actually it’s my middle name but please call me by it)
      and I’m a Front-End Engineer.
    </ParagraphStyled>
    <ParagraphStyled>
      I have been working with JavaScript + HTML5 + CSS3 since 2016 after 8
      years of professional application development using primarily Java and
      Adobe Flex.
    </ParagraphStyled>
    <ParagraphStyled>
      Some of the things I like are declarative views (React), integration
      testing (Cypress) and agile processes (Scrum).
    </ParagraphStyled>
  </BioStyled>
);

export default Bio;
