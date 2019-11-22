import React, {FC} from 'react';
import {SafeAreaView, ViewProps} from 'react-native';
import {Container} from '@flavr/ui';

export const Page: FC<ViewProps> = ({children, testID}) => (
  <SafeAreaView testID={testID} style={{flex: 1, marginTop: 20}}>
    <Container gutter={20}>{children}</Container>
  </SafeAreaView>
);
