// Types
import { AnyAction } from 'redux';
import { types } from '../types';

const initialState = {
  isNavigationOpen: false,
};

export const uiReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.SET_NAVIGATION_OPEN: {
      return {
        ...state,
        isNavigationOpen: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
