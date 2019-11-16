/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useReducer, useEffect} from 'react';
import {createAppContainer, NavigationNavigator} from 'react-navigation';
import Navigator from './navigation';
import {AppContextProvider} from './context';
import {Store, Action} from './types';
import AsyncStorage from '@react-native-community/async-storage';

const initialState: Store = {
  recipes: [],
  categories: null,
  favorites: [],
};

const reducer = (state: Store, action: Action) => {
  let favorites;
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (action.payload && !state.favorites.includes(action.payload)) {
        favorites = state.favorites.concat([action.payload]);
        AsyncStorage.setItem('@flavr.favorites', JSON.stringify(favorites));
        return {
          ...state,
          favorites,
        };
      }
      break;
    case 'REMOVE_FAVORITE':
      if (action.payload) {
        favorites = state.favorites.filter(item => item !== action.payload);
        AsyncStorage.setItem('@flavr.favorites', JSON.stringify(favorites));
        return {
          ...state,
          favorites,
        };
      }
      break;
    case 'INIT_FAVORITES':
      return {
        ...state,
        favorites: action.payload,
      };
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

const AppContainer = createAppContainer(
  Navigator as NavigationNavigator<any, any>,
);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const checkFavorites = async () => {
      try {
        const favorites = await AsyncStorage.getItem('@flavr.favorites');
        if (!favorites) {
          AsyncStorage.setItem('@flavr.favorites', JSON.stringify([]));
        } else {
          dispatch({type: 'INIT_FAVORITES', payload: JSON.parse(favorites)});
        }
      } catch (error) {
        console.warn(error.message);
        AsyncStorage.setItem('@flavr.favorites', JSON.stringify([]));
      }
    };
    checkFavorites();
  }, []);
  return (
    <AppContextProvider value={{state, dispatch}}>
      <AppContainer />
    </AppContextProvider>
  );
};

export default App;
