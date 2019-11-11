import React, {FC} from 'react';
import {FlatList} from 'react-navigation';
import {TouchableOpacity} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {Label} from '@flavr/ui';
import styled from 'styled-components/native';
import {Page} from '../components/layout/Page';
import {StoreInterface} from '../types';
import {withAppContext} from '../hoc/withAppContext';

const StyledItem = styled(TouchableOpacity)`
  background-color: white;
  border-radius: 4px;
  flex: 1;
  align-items: center;
  margin-bottom: 20px;
`;

export const Component: FC<NavigationStackScreenProps & StoreInterface> = ({
  navigation,
  state,
}) => (
  <Page>
    <FlatList
      data={Object.keys(state.categories || {})}
      renderItem={({item}: {item: string}) => (
        <StyledItem
          onPress={() => {
            navigation.push('recipeList', {
              category: item,
              title: state.categories
                ? state.categories[item].toUpperCase()
                : null,
            });
          }}>
          <Label color="#333333" size={16} padding="20px" transform="uppercase">
            {state.categories ? state.categories[item] : 'N.A'}
          </Label>
        </StyledItem>
      )}
      keyExtractor={item => item}
    />
  </Page>
);

export const CategoryList = withAppContext(Component);
