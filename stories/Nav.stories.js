import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { Nav } from '../src/components/Nav';
import { decorator } from './decorator';

addDecorator(story => (
  <div style={{ background: 'black', width: '500px', height: '200px' }}>
    {decorator(story)}
  </div>
));

storiesOf('Nav', module).add('displays Nav', () => (
  <Nav
    items={[
      { label: 'Writing', href: '#writing' },
      { label: 'Code', href: '#code' },
      { label: 'Photos', href: '#photos' },
    ]}
  />
));
