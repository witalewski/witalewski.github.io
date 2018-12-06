import React from 'react';
import styled from '@emotion/styled';

export const decorator = story => {
  const DivStyled = styled.div`
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

    h2 {
      text-align: center;
    }

    section {
      padding: 48px 0;

      max-width: 960px;
      margin: auto;
    }
  `;
  return <DivStyled>{story()}</DivStyled>;
};
