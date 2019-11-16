import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
// import firestore from '@react-native-firebase/firestore';
import {Label} from '@flavr/ui';
import {Page} from '../components/layout/Page';
import {Recipe} from 'src/types';
import recipes from '../assets/mock/recipes.json';
import {Button} from 'react-native';

// TODO : Push notif here ? Dark mode maybe ...

export const Settings: NavigationStackScreenComponent = ({navigation}) => {
  const addNewEntry = (data: Recipe) => {
    const ref = firestore()
      .collection('recipes')
      .doc();

    firestore().runTransaction(async transaction => {
      transaction.set(ref, data);
    });
  };

  return (
    <Page>
      <Label size={20}>SETTINGS</Label>
      <Button
        title="Run transaction"
        onPress={() => {
          recipes.forEach(item => addNewEntry(item));
        }}
      />
    </Page>
  );
};
