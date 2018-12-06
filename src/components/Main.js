import React from 'react';
import styled from '@emotion/styled';
import { Writing } from './Writing';
import { Photos } from './Photos';
import { Code } from './Code';
import { ImageBreak } from './ImageBreak';
import workspace from '../assets/images/workspace.jpg';
import dinosaur from '../assets/images/dinosaur.jpg';

const MainStyled = styled.main`
  h2 {
    text-align: center;
  }

  section {
    padding: 48px 0;

    max-width: 960px;
    margin: auto;
  }
`;
export const Main = () => (
  <MainStyled>
    <Writing />
    <ImageBreak src={workspace} y={0} />
    <Code />
    <ImageBreak src={dinosaur} y={20} />
    <Photos />
  </MainStyled>
);
