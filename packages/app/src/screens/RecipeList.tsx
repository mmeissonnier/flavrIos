import React, {FC, useMemo} from 'react';
import {
  NavigationStackScreenProps,
  NavigationStackScreenComponent,
} from 'react-navigation-stack';
import {Page} from '../components/layout/Page';
import {RecipeCardList} from '../components/RecipeCardList';
import {StoreInterface} from '../types';
import {withAppContext} from '../hoc/withAppContext';

const Component: FC<NavigationStackScreenProps & StoreInterface> = ({
  navigation,
  state,
}) => {
  const categoryParam = navigation.getParam('category');
  const isFavoritesRoute = navigation.state.routeName === 'favorites';
  const data = useMemo(() => {
    return state.recipes
      .filter(
        recipe =>
          (isFavoritesRoute && state.favorites.includes(recipe.id)) ||
          (categoryParam && recipe.category === categoryParam),
      )
      .map(item => ({
        ...item,
        category: state.categories ? state.categories[item.category] : 'N.A',
      }));
  }, [state, categoryParam]);
  return (
    <Page>
      <RecipeCardList
        data={data}
        onPress={id => {
          navigation.push('recipe', {recipeId: id});
        }}
      />
    </Page>
  );
};

export const RecipeList = withAppContext(Component);

(RecipeList as NavigationStackScreenComponent).navigationOptions = ({
  navigation,
}) => {
  return {
    title: navigation.getParam('title', 'N.A'),
  };
};
