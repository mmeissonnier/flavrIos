import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {Container} from '@flavr/ui';

export const Page: FC = ({children}) => (
  <SafeAreaView style={{flex: 1, marginTop: 20}}>
    <Container gutter={20}>{children}</Container>
  </SafeAreaView>
);
