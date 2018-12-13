import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { Photos } from '../src/components/Photos/Photos';
import mockPhotos from '../src/mocks/mockPhotos.json';
import { decorator } from './decorator';

addDecorator(decorator);

storiesOf('Photos', module).add('with a predefined list from Instagram', () => <Photos n={15} photos={mockPhotos} />);
