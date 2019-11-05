import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {TextField} from '.';
import {View} from 'react-native';

storiesOf('TextField', module).add('default', () => (
  <View style={{flexDirection: 'row'}}>
    <TextField placeholder="Enter your email" />
  </View>
));
