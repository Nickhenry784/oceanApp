/* eslint-disable no-param-reassign */
import produce from 'immer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SET_TURN,
  INCREMENT_TURN,
  DECREMENT_TURN,
  SET_SHOW_COUNTDOWN,
} from '../constants';

export const initialState = {
  turn: 5,
  isShowCountdown: false,
  backgroundType: 'default',
};

export default (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SET_SHOW_COUNTDOWN:
        draft.isShowCountdown = action.isShowCountdown;
        break;

      case SET_TURN:
        AsyncStorage.setItem('@turn', JSON.stringify(action.turn));
        draft.turn = action.turn;
        break;

      case INCREMENT_TURN:
        AsyncStorage.setItem(
          '@turn',
          JSON.stringify(Number(action.amount) + Number(draft.turn)),
        );
        draft.turn += Number(action.amount);
        break;

      case DECREMENT_TURN:
        AsyncStorage.setItem(
          '@turn',
          JSON.stringify(Number(draft.turn) - Number(action.amount)),
        );
        draft.turn -= Number(action.amount);
        break;
    }
  });
