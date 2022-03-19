import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import { images } from 'assets/images';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SizedBox } from 'sizedbox';
import { makeSelectIsShowCountDown, makeSelectTurn } from './selectors';
import { appStyle } from './style';
import { decrementTurn, setShowCountDown } from './actions';

function CountDown({ dispatch, turn, isShowCountDown }) {
  const [number, setNumber] = useState(0);
  const [inputNumber, setInputNumber] = useState(null);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const decrementNumber = () => {
      if (!pause && number > 0) {
        setNumber(number - 1);
      }
    };
    const timer1 = setTimeout(decrementNumber, 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, [number, pause]);

  const onChangeInputNumber = value => {
    setInputNumber(value);
  };

  const onClickPauseCountDown = () => {
    setPause(!pause);
  };

  const onClickStartButton = () => {
    if (turn > 0) {
      setPause(false);
      dispatch(decrementTurn());
      dispatch(setShowCountDown(true));
      setNumber(inputNumber > 999 ? 999 : inputNumber);
    } else {
      Alert.alert('Please buy more turn!');
    }
  };

  return (
    <>
      {!isShowCountDown && (
        <>
          <View style={appStyle.viewCenter}>
            <TextInput
              style={appStyle.input}
              onChangeText={onChangeInputNumber}
              value={inputNumber}
              placeholder="Input Number"
              keyboardType="numeric"
            />
            <SizedBox vertical={10} />
            <TouchableOpacity
              onPress={onClickStartButton}
              onLongPress={onClickStartButton}>
              <ImageBackground
                source={images.home.button}
                style={appStyle.startImage}>
                <Text style={appStyle.textStartButton}>START</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </>
      )}
      {isShowCountDown && (
        <>
          <View style={appStyle.viewCenter}>
            <ImageBackground
              source={images.home.clock}
              style={appStyle.clockStyle}>
              <Text style={appStyle.textClock}>{number}</Text>
            </ImageBackground>
            <SizedBox vertical={50} />
            <TouchableOpacity
              onPress={onClickPauseCountDown}
              onLongPress={onClickPauseCountDown}>
              <ImageBackground
                source={images.home.button}
                style={appStyle.startImage}>
                <Text style={appStyle.textStartButton}>
                  {pause ? 'PLAY' : 'PAUSE'}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
}

CountDown.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.number,
  isShowCountDown: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
  isShowCountDown: makeSelectIsShowCountDown(),
});

export default connect(mapStateToProps)(CountDown);
