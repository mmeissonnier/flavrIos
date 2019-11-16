import React, {FC, useMemo} from 'react';
import {FlatList} from 'react-navigation';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {Label, Column} from '@flavr/ui';
import {Page} from '../components/layout/Page';
import {Recipe, StoreInterface} from '../types';
import {Image, TouchableOpacity} from 'react-native';
import {RecipeCardList} from '../components/RecipeCardList';
import {withAppContext} from '../hoc/withAppContext';

const Component: FC<NavigationStackScreenProps & StoreInterface> = ({
  navigation,
  state,
}) => {
  const data = useMemo(
    () =>
      state.recipes.map(item => ({
        ...item,
        category: state.categories ? state.categories[item.category] : 'N.A',
      })),
    [state],
  );
  return (
    <Page>
      <Label
        size={18}
        color="#979797"
        font="Montserrat-Medium"
        margin="0 0 20px 0"
        transform="uppercase">
        Featured recipes
      </Label>
      <Column>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({item}: {item: Recipe}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.push('recipe', {recipeId: item.id});
              }}
              style={{
                marginRight: 14,
              }}>
              <Image
                resizeMode="cover"
                source={{uri: item.image}}
                style={{
                  width: 208,
                  height: 128,
                  borderRadius: 4,
                  backgroundColor: 'white',
                }}
              />
            </TouchableOpacity>
          )}
        />
      </Column>
      <Label
        size={18}
        color="#979797"
        margin="18px 0 20px 0"
        font="Montserrat-Medium"
        transform="uppercase">
        Latest
      </Label>
      <RecipeCardList
        data={data}
        onPress={id => {
          navigation.push('recipe', {recipeId: id});
        }}
      />
    </Page>
  );
};

export const Home = withAppContext(Component);
