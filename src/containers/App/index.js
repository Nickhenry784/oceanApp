import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { makeSelectIsShowShopping, makeSelectTurn } from './selectors';
import { appStyle } from './style';
import saga from './saga';
import reducer from './reducer';
import Layout from './Layout';
import Buttons from './Buttons';
import Gamepad from './GamePad';
import { setShowShopping } from './actions';

const key = 'App';

function App({ dispatch, turn, isShowShopping }) {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });

  const onSetShowShopping = () => {
    dispatch(setShowShopping(false));
  };

  return (
    <Layout turn={turn}>
      {isShowShopping ? (
        <TouchableOpacity
          onPress={onSetShowShopping}
          onLongPress={onSetShowShopping}>
          <Text style={appStyle.turn}>Back</Text>
        </TouchableOpacity>
      ) : (
        <Text style={appStyle.turn}>{`Uses: ${turn}`}</Text>
      )}
      <View style={appStyle.viewCenter}>
        {isShowShopping ? <Buttons /> : <Gamepad />}
      </View>
    </Layout>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.number,
  isShowShopping: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
  isShowShopping: makeSelectIsShowShopping(),
});

export default connect(mapStateToProps)(App);
