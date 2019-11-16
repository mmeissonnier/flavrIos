import React, {FC, useRef, useState, RefObject} from 'react';
import {FlatList, NavigationEvents} from 'react-navigation';
import {TouchableOpacity} from 'react-native';
import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated';
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
}) => {
  const ref = useRef<TransitioningView>() as RefObject<TransitioningView>;
  const [refresh, setRefresh] = useState(0);
  const transition = (
    <Transition.Sequence>
      <Transition.Together>
        <Transition.In
          type="slide-bottom"
          durationMs={550}
          interpolation="easeOut"
          propagation="top"
        />
        <Transition.In type="fade" durationMs={450} delayMs={300} />
      </Transition.Together>
    </Transition.Sequence>
  );
  return (
    <Page>
      <NavigationEvents
        onWillFocus={() => {
          if (ref && ref.current) {
            ref.current.animateNextTransition();
          }
          setRefresh(refresh + 1);
        }}
      />
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={{
          flexGrow: 1,
          justifyContent: 'center',
        }}>
        <FlatList
          data={Object.keys(state.categories || {})}
          key={refresh}
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
              <Label
                color="#333333"
                size={16}
                padding="20px"
                transform="uppercase">
                {state.categories ? state.categories[item] : 'N.A'}
              </Label>
            </StyledItem>
          )}
          keyExtractor={item => item}
        />
      </Transitioning.View>
    </Page>
  );
};

export const CategoryList = withAppContext(Component);
