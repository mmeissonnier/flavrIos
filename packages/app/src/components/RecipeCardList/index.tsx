import React, {FC, useRef, RefObject, useEffect, useState} from 'react';
import {FlatList} from 'react-navigation';
import styled from 'styled-components/native';
import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated';
import {RecipeCard, Column} from '@flavr/ui';
import {Recipe} from '../../types';
import {formatRecipeShortInfo} from '../../helpers/recipeHelper';
import {ListEmpty} from '../ListEmpty';
import {ImageEmpty} from '../ImageEmpty';

const StyledRecipeCard = styled(RecipeCard)`
  margin-bottom: 20px;
`;

export const RecipeCardList: FC<{
  data: Recipe[] | null;
  onPress: (id: string) => void;
}> = ({data, onPress}) => {
  const ref = useRef<TransitioningView>() as RefObject<TransitioningView>;
  const [refresh, setRefresh] = useState(0);
  const transition = (
    <Transition.Sequence>
      <Transition.Together>
        <Transition.In
          type="slide-bottom"
          durationMs={450}
          interpolation="easeOut"
          propagation="top"
        />
        <Transition.In type="fade" durationMs={500} delayMs={300} />
      </Transition.Together>
    </Transition.Sequence>
  );
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.animateNextTransition();
      setRefresh(refresh + 1);
    }
  }, []);
  if (data && data.length !== 0)
    return (
      <Transitioning.View ref={ref} transition={transition}>
        <FlatList
          data={data}
          key={refresh}
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
              imageEmpty={ImageEmpty}
              category={item.category}
              infos={formatRecipeShortInfo(item.shortInfo)}
              image={item.image}
            />
          )}
        />
      </Transitioning.View>
    );
  return (
    <Column flex={1} justifyContent="center" alignItems="center">
      <ListEmpty />
    </Column>
  );
};
