import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { Writing } from '../src/components/Writing';
import { decorator } from './decorator';

addDecorator(decorator);

storiesOf('Writing', module).add('loading a list from Medium', () => <Writing />);
