import { AnyAction } from 'redux';
import avatar from '../../../assets/default-icon.svg';
import { pushOptions } from '../types/pushes';

const initialState = {
  segmentOptions: [],
  dateOptions: [],
  preview: {
    pushIcon: avatar,
    pushName: 'Push name',
    pushTitle: 'Title lorem ipsum',
    pushMessage: 'Lorem ipsum ipsum ipsum ipsum ipsum',
    pushImg: '',
  },
};

export const pushReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case pushOptions.SET_PUSH_SEGMENT: {
      return {
        ...state,
        segmentOptions: [...state.segmentOptions, action.payload],
      };
    }

    case pushOptions.SET_PUSH_DATE: {
      return {
        ...state,
        dateOptions: [...state.dateOptions, action.payload],
      };
    }

    case pushOptions.DELETE_PUSH: {
      const { optionsType, payload } = action;

      const updatedOptions = state[optionsType].filter(
        item => item.id !== payload
      );
      return {
        ...state,
        [optionsType]: updatedOptions,
      };
    }

    case pushOptions.SET_PREVIEW_DATA: {
      console.log('push Object =>', action.payload);

      return {
        ...state,
        preview: { ...action.payload },
      };
    }

    default: {
      return state;
    }
  }
};
