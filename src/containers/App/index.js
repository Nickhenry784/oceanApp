import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { images } from 'assets/images';
import { makeSelectIsShowShopping, makeSelectTurn } from './selectors';
import { appStyle } from './style';
import saga from './saga';
import reducer from './reducer';
import Layout from './Layout';
import Buttons from './Buttons';
import HomePage from './HomePage';
import { setShowShopping } from './actions';

const key = 'App';

function App({ dispatch, turn, isShowShopping }) {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });

  const onSetShowShopping = () => {
    dispatch(setShowShopping(!isShowShopping));
  };

  return (
    <Layout turn={turn}>
      {isShowShopping ? (
        <TouchableOpacity
          onPress={onSetShowShopping}
          onLongPress={onSetShowShopping}>
          <Text style={appStyle.backText}>Back</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onSetShowShopping}
          onLongPress={onSetShowShopping}>
          <ImageBackground source={images.home.buy} style={appStyle.buyImage}>
            <Text style={appStyle.turnText}>{turn}</Text>
          </ImageBackground>
        </TouchableOpacity>
      )}
      {isShowShopping ? <Buttons /> : <HomePage />}
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
