import React from 'react';
import styled from '@emotion/styled';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

const AppStyled = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&subset=latin-ext');
  font-family: 'Lato', sans-serif;
`;
export const App = () => (
  <AppStyled>
    <Header />
    <Main />
    <Footer />
  </AppStyled>
);
