import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {LabelIcon} from '.';
import {text, number, color, select} from '@storybook/addon-knobs';

storiesOf('Label with Icon', module).add('default', () => (
  <LabelIcon
    icon="md-time"
    iconSize={26}
    font={text('Font', 'Montserrat')}
    size={number('Size', 20)}
    transform={select(
      'Text transform',
      ['none', 'uppercase', 'capitalize'],
      'none',
    )}
    color={color('Color', 'rgba(0,0,0, 1)')}>
    This is a label with an icon
  </LabelIcon>
));
