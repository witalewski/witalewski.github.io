import React from 'react';
import { storiesOf } from '@storybook/react';
import { Nav } from '../src/components/Nav/Nav';
import { Header } from '../src/components/Header/Header';
import '../src/index.css';

storiesOf('Header+Nav', module).add('displays Header+Nav', () => (
  <div>
    <Header />
    <Nav
      items={[
        { label: 'Writing', href: '#writing' },
        { label: 'Code', href: '#code' },
        { label: 'Photos', href: '#photos' },
      ]}
    />
  </div>
));
