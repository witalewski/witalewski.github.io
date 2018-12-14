import React from 'react';
import { storiesOf } from '@storybook/react';
import { Writing } from '../src/components/Writing/Writing';
import mockWriting from '../src/mocks/mockWriting.json'
import '../src/index.css';

storiesOf('Writing', module).add('with a predefined list from Medium', () => <Writing n={4} m={2} posts={mockWriting} />);
