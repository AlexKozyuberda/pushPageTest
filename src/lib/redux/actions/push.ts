import { pushOptions } from '../types/pushes';

export const pushAction = Object.freeze({
  setSegmentOptions: data => {
    console.log('data', data);
    return {
      type: pushOptions.SET_PUSH_SEGMENT,
      payload: data,
    };
  },

  setDataOptions: data => {
    return {
      type: pushOptions.SET_PUSH_DATE,
      payload: data,
    };
  },

  deletePushOptions: (optionsType, id: string) => {
    return {
      type: pushOptions.DELETE_PUSH,
      optionsType,
      payload: id,
    };
  },

  setPreviewData: data => {
    return {
      type: pushOptions.SET_PREVIEW_DATA,
      payload: data,
    };
  },
});
