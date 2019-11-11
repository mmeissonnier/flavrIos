import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ListItem} from '.';
import {View} from 'react-native';

storiesOf('List Item', module).add('default', () => (
  <View>
    <ListItem>Lorem ipsum dolor sit amet fluctuat nec mergitur</ListItem>
    <ListItem margin="10px 0">
      Lorem ipsum dolor sit amet fluctuat nec mergitur{'\n'}Lorem ipsum dolor
      sit amet fluctuat nec mergitur
    </ListItem>
  </View>
));

storiesOf('List Item', module).add('with number', () => (
  <View>
    <ListItem index={1}>
      Lorem ipsum dolor sit amet fluctuat nec mergitur
    </ListItem>
    <ListItem index={99} margin="10px 0">
      Lorem ipsum dolor sit amet fluctuat nec mergitur{'\n'}Lorem ipsum dolor
      sit amet fluctuat nec mergitur
    </ListItem>
  </View>
));
