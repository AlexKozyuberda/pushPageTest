import { DateOption, Preview, SegmentOption } from '../reducers/push';
import { types } from '../types';

export const pushAction = Object.freeze({
  setSegmentOptions: (data: SegmentOption) => {
    return {
      type: types.SET_PUSH_SEGMENT,
      payload: data,
    };
  },

  setDataOptions: (data: DateOption) => {
    return {
      type: types.SET_PUSH_DATE,
      payload: data,
    };
  },

  deletePushOptions: (optionsType: string, id: string | undefined) => {
    return {
      type: types.DELETE_PUSH,
      optionsType,
      payload: id,
    };
  },

  setPreviewData: (data: Preview) => {
    return {
      type: types.SET_PREVIEW_DATA,
      payload: data,
    };
  },

  clearPushOptions: (optionsType: string) => {
    return {
      type: types.SET_CLEAR_OPTIONS,
      optionsType,
    };
  },
});
