import React from 'react';
import {StoreInterface, Store} from './types';

const initialState: Store = {
  recipes: [],
  categories: null,
  favorites: [],
};

const AppContext = React.createContext<StoreInterface>({
  dispatch: () => null,
  state: initialState,
});

export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;
