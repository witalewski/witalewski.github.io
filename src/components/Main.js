import React from 'react';
import styled from '@emotion/styled';
import { Writing } from './Writing';
import { Photos } from './Photos';
import { Code } from './Code';

const MainStyled = styled.main`
  max-width: 960px;
  margin: auto;

  h2 {
      text-align: center;
  }

  section {
      padding: 48px 0;
  }
`;
export const Main = () => (
  <MainStyled>
    <Writing />
    <Code />
    <Photos />
  </MainStyled>
);
