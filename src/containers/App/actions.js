import {
  SET_TURN,
  REQUEST_DATA,
  INCREMENT_TURN,
  DECREMENT_TURN,
  SET_SHOW_SHOPPING,
  SET_PLAY_STATE,
} from './constants';

export const setTurn = turn => ({
  type: SET_TURN,
  turn,
});

export const setPlayState = isPlayState => ({
  type: SET_PLAY_STATE,
  isPlayState,
});

export const incrementTurn = amount => ({
  type: INCREMENT_TURN,
  amount,
});

export const decrementTurn = (amount = 10) => ({
  type: DECREMENT_TURN,
  amount,
});

export const requestData = () => ({
  type: REQUEST_DATA,
});

export const setShowShopping = isShowShopping => ({
  type: SET_SHOW_SHOPPING,
  isShowShopping,
});
