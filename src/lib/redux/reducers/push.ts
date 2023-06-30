import { AnyAction } from 'redux';
import avatar from '../../../assets/default-icon.svg';
import { types } from '../types';

export interface DateOption {
  id: string;
  index: number;
}

export interface SegmentOption {
  id: string;
  index: number;
  segment: string;
}

export interface Preview {
  pushIcon: string;
  pushName: string;
  pushTitle: string;
  pushMessage: string;
  pushImg: string;
}
interface InitialState {
  segmentOptions: SegmentOption[];
  dateOptions: DateOption[];
  preview: Preview;
}

export const initialState: InitialState = {
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

type OptionsType = 'segmentOptions' | 'dateOptions';

export const pushReducer = (
  state = initialState,
  action: AnyAction
): InitialState => {
  switch (action.type) {
    case types.SET_PUSH_SEGMENT: {
      return {
        ...state,
        segmentOptions: [...state.segmentOptions, action.payload],
      };
    }

    case types.SET_PUSH_DATE: {
      return {
        ...state,
        dateOptions: [...state.dateOptions, action.payload],
      };
    }

    case types.SET_CLEAR_OPTIONS: {
      const { optionsType } = action;

      return {
        ...state,
        [optionsType]: [],
      };
    }

    case types.DELETE_PUSH: {
      const optionsType: OptionsType = action.optionsType;

      const updatedOptions = state[optionsType].filter(
        item => item.id !== action.payload
      );

      return {
        ...state,
        [optionsType]: updatedOptions,
      };
    }

    case types.SET_PREVIEW_DATA: {
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
