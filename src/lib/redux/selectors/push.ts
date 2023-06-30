import { RootState } from '../init/store';
import { initialState } from '../reducers/push';

export const getPushSegmentOptions = (
  state: RootState
): (typeof initialState)['segmentOptions'] => {
  return state.pushData.segmentOptions;
};
export const getPushDateOptions = (
  state: RootState
): (typeof initialState)['dateOptions'] => {
  return state.pushData.dateOptions;
};

export const getPreviewData = (
  state: RootState
): (typeof initialState)['preview'] => {
  return state.pushData.preview;
};
