/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useReducer} from 'react';
import {createAppContainer, NavigationNavigator} from 'react-navigation';
import Navigator from './navigation';
import {AppContextProvider} from './context';
import {Store, Action} from './types';

const initialState: Store = {
  recipes: [],
  categories: null,
  favorites: [],
};

const reducer = (state: Store, action: Action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (action.payload) {
        return {
          ...state,
          favorites: state.favorites.concat([action.payload]),
        };
      }
      break;
    case 'REMOVE_FAVORITE':
      if (action.payload) {
        return {
          ...state,
          favorites: state.favorites.filter(item => item !== action.payload),
        };
      }
      break;
    case 'INIT_RECIPES':
      return {
        ...state,
        recipes: action.payload,
      };

    case 'INIT_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
  return state;
};

const AppContainer = createAppContainer(Navigator as NavigationNavigator<
  any,
  any
>);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContextProvider value={{state, dispatch}}>
      <AppContainer />
    </AppContextProvider>
  );
};

export default App;
