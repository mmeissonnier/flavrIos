import React from 'react';
import styled from 'styled-components/native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Logo, TextField, Button, Label, Column} from '@flavr/ui';
import {Page} from '../components/layout/Page';

const TextInput = styled(TextField)`
  margin-bottom: 20px;
  width: 100%;
`;

const LoginButton = styled(Button)`
  width: 100%;
  align-items: center;
  margin-top: 50px;
`;

export const Login: NavigationStackScreenComponent = ({navigation}) => (
  <Page>
    <Column justifyContent="center" alignItems="center" flex={1}>
      <Logo color="black" />
    </Column>
    <Column flex={2}>
      <TextInput placeholder="Enter your email" keyboardType="email-address" />
      <TextInput placeholder="Enter your password" secureTextEntry />
      <LoginButton
        onPress={() => {
          navigation.navigate('home');
        }}>
        <Label color="white" size={20} transform="uppercase" padding="10px">
          Log in
        </Label>
      </LoginButton>
    </Column>
  </Page>
);
