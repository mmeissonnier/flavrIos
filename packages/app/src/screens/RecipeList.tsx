import React from 'react';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Page} from '../components/layout/Page';
import {RecipeCardList} from '../components/RecipeCardList';

// TODO: Fetch data based on route + params

export const RecipeList: NavigationStackScreenComponent = ({navigation}) => {
  return (
    <Page>
      <RecipeCardList data={[]} />
    </Page>
  );
};
