import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {RecipeCard} from '.';
import {View} from 'react-native';

const mock = {
  id: '1',
  image:
    'http://www.club-sandwich.net/images/photorecettes/burger-regime-123rf.jpg',
  category: 'U.S.A',
  title: 'Big Tasty Burger',
  infos: [
    {icon: 'md-time', label: '30 minutes'},
    {icon: 'md-options', label: 'easy'},
    {icon: 'md-people', label: '2 people'},
  ],
};
storiesOf('Recipe Card', module).add('default', () => (
  <View style={{width: '90%', flex: 1, justifyContent: 'center'}}>
    <RecipeCard
      image={mock.image}
      category={mock.category}
      title={mock.title}
      infos={mock.infos}
    />
  </View>
));
