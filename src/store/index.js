import React, {createContext, useReducer} from 'react';
import { initialState } from './reducers/auth';

export const storeContext = createContext(initialState);
export const useStoreContext = () => useContext(storeContext);

const { Provider } = storeContext;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'action description':
        const newState = // do something with the action
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { storeContext, StateProvider }







