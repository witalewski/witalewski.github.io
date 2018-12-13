import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { Writing } from '../src/components/Writing/Writing';
import { decorator } from './decorator';
import mockWriting from '../src/mocks/mockWriting.json'

addDecorator(decorator);

storiesOf('Writing', module).add('with a predefined list from Medium', () => <Writing n={4} m={2} posts={mockWriting} />);
