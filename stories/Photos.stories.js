import React from 'react';
import { storiesOf } from '@storybook/react';
import { Photos } from '../src/components/Photos/Photos';
import mockPhotos from '../src/mocks/mockPhotos.json';
import '../src/index.css';


storiesOf('Photos', module).add('with a predefined list from Instagram', () => <Photos n={15} photos={mockPhotos} />);
