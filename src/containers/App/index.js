import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, Image, TouchableOpacity } from 'react-native';
import { images } from 'assets/images';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { makeSelectIsShowCountDown, makeSelectTurn } from './selectors';
import { appStyle } from './style';
import saga from './saga';
import reducer from './reducer';
import Layout from './Layout';
import { setShowCountDown } from './actions';
import Buttons from './Buttons';
import Countdown from './Countdown';

const key = 'App';

function App({ dispatch, turn, isShowCountDown }) {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const [isShowShopping, setShowShopping] = useState(false);

  const onSetShopping = () => {
    setShowShopping(!isShowShopping);
    dispatch(setShowCountDown(false));
  };

  const onSetCountDown = () => {
    dispatch(setShowCountDown(false));
  };

  return (
    <Layout turn={turn}>
      {!isShowCountDown ? (
        <Text style={appStyle.turn}>{`Turn: ${turn}`}</Text>
      ) : (
        <TouchableOpacity
          onPress={onSetCountDown}
          onLongPress={onSetCountDown}
          style={appStyle.turn}>
          <Text style={appStyle.turn}>Back</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={onSetShopping}
        onLongPress={onSetShopping}
        style={appStyle.shoppingButton}>
        <Image source={images.home.shopping} style={appStyle.shoppingImage} />
      </TouchableOpacity>
      {isShowShopping ? <Buttons /> : <Countdown />}
    </Layout>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.number,
  isShowCountDown: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
  isShowCountDown: makeSelectIsShowCountDown(),
});

export default connect(mapStateToProps)(App);
