// Types
import { types } from '../types';

export const uiActions = Object.freeze({
  setSettingsOpen: (isNavigationOpen: boolean) => {
    return {
      type: types.SET_NAVIGATION_OPEN,
      payload: isNavigationOpen,
    };
  },
});
