import React from 'react';
import {FlatList} from 'react-navigation';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Label} from '@flavr/ui';
import {Page} from '../components/layout/Page';
import {Recipe} from '../types';
import recipes from '../assets/mock/recipes.json';
import {Image, TouchableOpacity} from 'react-native';
import {RecipeCardList} from '../components/RecipeCardList';

export const Home: NavigationStackScreenComponent = ({navigation}) => (
  <Page>
    <Label
      size={18}
      color="#979797"
      font="Montserrat-Medium"
      margin="0 0 20px 0"
      transform="uppercase">
      Featured recipes
    </Label>
    <FlatList
      data={recipes}
      keyExtractor={item => item.id}
      horizontal
      renderItem={({item}: {item: Recipe}) => (
        <TouchableOpacity
          style={{
            height: 195,
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
    <Label
      size={18}
      color="#979797"
      margin="18px 0 20px 0"
      font="Montserrat-Medium"
      transform="uppercase">
      Latest
    </Label>
    <RecipeCardList data={recipes} />
  </Page>
);
