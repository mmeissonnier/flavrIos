import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Label} from '.';
import {text, number, color, select} from '@storybook/addon-knobs';

storiesOf('Label', module).add('default', () => (
  <Label
    font={text('Font', 'Montserrat')}
    size={number('Size', 12)}
    transform={select(
      'Text transform',
      ['none', 'uppercase', 'capitalize'],
      'none',
    )}
    color={color('Color', 'rgba(0,0,0, 1)')}>
    This is a label
  </Label>
));
