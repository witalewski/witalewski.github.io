import React from 'react';
import styled from '@emotion/styled';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { FixedNav } from './components/Nav/FixedNav';
import Main from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

const AppStyled = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&subset=latin-ext');

  font-family: 'Lato', sans-serif;

  * {
    box-sizing: border-box;
  }

  a,
  a:active,
  a:visited {
    color: #0366d6;
    text-decoration: none;
  }
`;
export const App = () => {
  const navItems = [
    { label: 'Writing', href: '#writing' },
    { label: 'Code', href: '#code' },
    { label: 'Photos', href: '#photos' },
  ];

  return (
    <AppStyled>
      <Header />
      <Nav items={navItems} />
      <FixedNav items={navItems} />
      <Main />
      <Footer />
    </AppStyled>
  );
};
