import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';

export const Login: NavigationStackScreenComponent = ({navigation}) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'purple',
    }}>
    <Text>LOGIN SCREEN</Text>
    <Button
      title="Go"
      onPress={() => {
        navigation.navigate({routeName: 'home'});
      }}
    />
  </View>
);
