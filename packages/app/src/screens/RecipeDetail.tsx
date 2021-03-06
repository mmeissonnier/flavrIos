import React, {
  FC,
  Fragment,
  useState,
  useEffect,
  useRef,
  RefObject,
} from 'react';
import {ScrollView, NavigationEvents} from 'react-navigation';
import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {ListItem, RecipeDetailHeader, Column, Label} from '@flavr/ui';
import {formatRecipeShortInfo} from '../helpers/recipeHelper';
import {StoreInterface} from '../types';
import {withAppContext} from '../hoc/withAppContext';
import Icon from 'react-native-vector-icons/Ionicons';
import {ImageEmpty} from '../components/ImageEmpty';

const Component: FC<NavigationStackScreenProps & StoreInterface> = ({
  navigation,
  state,
  dispatch,
}) => {
  const recipeIdParam = navigation.getParam('recipeId');
  const [isFavorite, setIsFavorite] = useState(
    state.favorites.includes(recipeIdParam),
  );
  const ref = useRef<TransitioningView>() as RefObject<TransitioningView>;
  let found = null;
  if (state.recipes) {
    found = state.recipes.find(recipe => recipe.id === recipeIdParam);
  }
  const recipe = found;

  useEffect(() => {
    const actionType = isFavorite ? 'ADD_FAVORITE' : 'REMOVE_FAVORITE';
    dispatch({type: actionType, payload: recipeIdParam});
  }, [isFavorite]);

  const transition = (
    <Transition.Sequence>
      <Transition.In type="fade" durationMs={350} delayMs={200} />
    </Transition.Sequence>
  );

  return (
    <ScrollView>
      {recipe && (
        <Fragment>
          <NavigationEvents
            onWillFocus={() => {
              if (ref && ref.current) {
                ref.current.animateNextTransition();
              }
            }}
          />
          <Transitioning.View
            ref={ref}
            transition={transition}
            style={{
              flexGrow: 1,
              justifyContent: 'center',
            }}>
            <RecipeDetailHeader
              image={recipe.image}
              title={recipe.title}
              imageEmpty={ImageEmpty}
              onPress={() => {
                setIsFavorite(!isFavorite);
              }}
              category={
                state.categories ? state.categories[recipe.category] : 'N.A'
              }
              infos={formatRecipeShortInfo(recipe.shortInfo)}>
              <Icon
                name={isFavorite ? 'md-heart' : 'md-heart-empty'}
                size={24}
                color="white"
                style={{padding: 20, position: 'absolute', right: 0, top: 0}}
              />
            </RecipeDetailHeader>
            <Label
              transform="uppercase"
              size={16}
              padding="40px 20px 20px 20px"
              align="center"
              style={{backgroundColor: '#f7f7f7'}}
              color="#333333">
              Ingredients
            </Label>
            <Column pad="0 20px 20px 20px" style={{backgroundColor: 'white'}}>
              {recipe.ingredients.map(item => (
                <ListItem margin="20px 0 0 0" key={item}>
                  {item}
                </ListItem>
              ))}
            </Column>
            <Label
              transform="uppercase"
              size={16}
              padding="20px"
              align="center"
              style={{backgroundColor: '#f7f7f7'}}
              color="#333333">
              Instructions
            </Label>
            <Column pad="0 20px 50px 20px" style={{backgroundColor: 'white'}}>
              {recipe.instructions.map((item, index) => (
                <ListItem margin="20px 0 0 0" key={item} index={index + 1}>
                  {item}
                </ListItem>
              ))}
            </Column>
          </Transitioning.View>
        </Fragment>
      )}
    </ScrollView>
  );
};

export const RecipeDetail = withAppContext(Component);
