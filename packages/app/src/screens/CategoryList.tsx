import React from 'react';
import {FlatList} from 'react-navigation';
import {TouchableOpacity} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {Label} from '@flavr/ui';
import styled from 'styled-components/native';
import {Page} from '../components/layout/Page';
import categories from '../assets/mock/categories.json';
import {getCategory} from '../helpers/recipeHelper';
import {RecipeCategory} from 'src/types';

const StyledItem = styled(TouchableOpacity)`
  background-color: white;
  border-radius: 4px;
  flex: 1;
  align-items: center;
  margin-bottom: 20px;
`;

export const CategoryList: NavigationStackScreenComponent = ({navigation}) => (
  <Page>
    <FlatList
      data={categories}
      renderItem={({item}: {item: string}) => (
        <StyledItem
          onPress={() => {
            navigation.push('recipeList', {category: item});
          }}>
          <Label color="#333333" size={16} padding="20px" transform="uppercase">
            {getCategory(item as RecipeCategory)}
          </Label>
        </StyledItem>
      )}
      keyExtractor={item => item}
    />
  </Page>
);
