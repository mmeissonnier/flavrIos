import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Button} from '.';
import {Label} from '../Label';

storiesOf('Button', module).add('default', () => (
  <Button>
    <Label transform="uppercase" padding="10px 40px">
      Log in
    </Label>
  </Button>
));
