import React from 'react';
import { storiesOf } from '@storybook/react';
import { App } from '../src/App';
import '../src/index.css';

storiesOf('App', module).add('complete application', () => <App />);
