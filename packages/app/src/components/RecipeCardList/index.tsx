import React, {FC} from 'react';
import {FlatList} from 'react-navigation';
import styled from 'styled-components/native';
import {RecipeCard} from '@flavr/ui';
import {Recipe} from '../../types';
import {formatRecipeShortInfo} from '../../helpers/recipeHelper';
import {ListEmpty} from '../ListEmpty';

const StyledRecipeCard = styled(RecipeCard)`
  margin-bottom: 20px;
`;

export const RecipeCardList: FC<{
  data: Recipe[] | null;
  onPress: (id: string) => void;
}> = ({data, onPress}) => (
  <FlatList
    data={data}
    ListEmptyComponent={ListEmpty}
    keyExtractor={item => item.id}
    contentContainerStyle={
      !(data && data.length !== 0)
        ? {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }
        : null
    }
    renderItem={({item}: {item: Recipe}) => (
      <StyledRecipeCard
        onPress={() => {
          onPress(item.id);
        }}
        title={item.title}
        category={item.category}
        infos={formatRecipeShortInfo(item.shortInfo)}
        image={item.image}
      />
    )}
  />
);
