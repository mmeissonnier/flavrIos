import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Label} from '@flavr/ui';
import {Page} from '../components/layout/Page';

// TODO : Push notif here ? Dark mode maybe ...

export const Settings: NavigationStackScreenComponent = ({navigation}) => (
  <Page>
    <Label size={20}>SETTINGS</Label>
  </Page>
);
