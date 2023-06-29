import { RootState } from '../init/store';

export const getPushSegmentOptions = (state: RootState) => {
  return state.pushData.segmentOptions;
};
export const getPushDateOptions = (state: RootState) => {
  return state.pushData.dateOptions;
};

export const getPreviewData = (state: RootState) => {
  return state.pushData.preview;
};
