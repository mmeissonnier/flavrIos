import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Logo} from '.';
import {color} from '@storybook/addon-knobs';

storiesOf('Logo', module).add('default', () => (
  <Logo color={color('Color', 'rgba(255,255,255,1)')} />
));
