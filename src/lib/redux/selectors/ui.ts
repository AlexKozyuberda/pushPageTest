import { RootState } from '../init/store';

export const getNavigationOpen = (state: RootState): boolean => {
  return state.ui.isNavigationOpen;
};
