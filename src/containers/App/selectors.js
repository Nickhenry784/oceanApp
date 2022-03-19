import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectGlobal = () => createSelector(selectGlobal, state => state);

const makeSelectTurn = () => createSelector(selectGlobal, state => state.turn);

const makeSelectIsShowCountDown = () =>
  createSelector(selectGlobal, state => state.isShowCountdown);

export { makeSelectGlobal, makeSelectTurn, makeSelectIsShowCountDown };
