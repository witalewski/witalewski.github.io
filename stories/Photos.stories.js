import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { Photos } from '../src/components/Photos/Photos';
import { decorator } from './decorator';

addDecorator(decorator);

storiesOf('Photos', module).add('loading a list from Instagram', () => <Photos />);
