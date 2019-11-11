import React, {ComponentType, Component} from 'react';
import {AppContextConsumer} from '../context';
import {StoreInterface} from '../types';

export const withAppContext = (
  WrappedComponent: ComponentType<any & StoreInterface>,
) => (props: any) => (
  <AppContextConsumer>
    {storeInterface => {
      if (storeInterface && storeInterface.state && storeInterface.dispatch) {
        const {state, dispatch} = storeInterface;
        return (
          <WrappedComponent {...props} state={state} dispatch={dispatch} />
        );
      }
      return <span>No store defined</span>;
    }}
  </AppContextConsumer>
);
