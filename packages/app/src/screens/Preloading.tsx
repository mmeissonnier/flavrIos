import React, {useEffect, FC} from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {ImageBackground, StyleSheet, ActivityIndicator} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import SplashScreen from '../assets/images/splash.png';
import {Column} from '@flavr/ui';
import {StoreInterface} from '../types';
import {withAppContext} from '../hoc/withAppContext';

const Component: FC<NavigationStackScreenProps & StoreInterface> = ({
  navigation,
  dispatch,
}) => {
  useEffect(() => {
    const recipeRef = firestore().collection('recipes');
    const categoriesRef = firestore().collection('categories');

    const getData = async () => {
      let results = await recipeRef.get();
      if (results && results.docs) {
        dispatch({
          type: 'INIT_RECIPES',
          payload: results.docs.map(doc => ({...doc.data(), id: doc.id})),
        });
      }
      results = await categoriesRef.get();
      if (results && results.docs) {
        dispatch({
          type: 'INIT_CATEGORIES',
          payload: results.docs[0].data(),
        });
        navigation.navigate('login');
      }
    };

    getData();
  }, []);
  return (
    <ImageBackground
      source={SplashScreen}
      style={StyleSheet.absoluteFill}
      testID="flavr.screen.preloading">
      <Column alignItems="center" justifyContent="center" flex={1}>
        <ActivityIndicator color="white" size="large" />
      </Column>
    </ImageBackground>
  );
};

export const Preloading = withAppContext(Component);
