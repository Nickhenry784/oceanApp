import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ImageBackground,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { images } from 'assets/images';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SizedBox } from 'sizedbox';
import { makeSelectTurn, makeSelectIsShowShopping } from './selectors';
import { appStyle } from './style';
import { decrementTurn, setShowShopping } from './actions';

const key = 'App';

function GamePad({ dispatch, turn, isShowShopping }) {
  const [inputTopButton, setInputTopButton] = useState('');
  const [inputRightButton, setInputRightButton] = useState('');
  const [inputLeftButton, setInputLeftButton] = useState('');
  const [inputBottomButton, setInputBottomButton] = useState('');
  const [inputGreenButton, setInputGreenButton] = useState('');
  const [inputYellowButton, setInputYellowButton] = useState('');
  const [inputRedButton, setInputRedButton] = useState('');
  const [inputBlueButton, setInputBlueButton] = useState('');
  const [inputDisable, setInputDisable] = useState(true);

  const onSetShowShopping = () => {
    dispatch(setShowShopping(true));
  };

  const onSaveGamePad = () => {
    if (turn > 0) {
      setInputDisable(false);
      dispatch(decrementTurn());
    } else {
      Alert.alert('Please buy more turn!');
    }
  };

  const onResetGamePad = () => {
    setInputDisable(true);
    setInputTopButton('');
    setInputRightButton('');
    setInputLeftButton('');
    setInputBottomButton('');
    setInputGreenButton('');
    setInputYellowButton('');
    setInputRedButton('');
    setInputBlueButton('');
  };

  return (
    <>
      <ImageBackground
        source={images.home.gamepad}
        style={appStyle.gamepadImage}>
        <TextInput
          style={appStyle.inputTopButton}
          onChangeText={setInputTopButton}
          editable={inputDisable}
          maxLength={1}
          value={String(inputTopButton)}
        />
        <TextInput
          style={appStyle.inputRightButton}
          onChangeText={setInputRightButton}
          editable={inputDisable}
          maxLength={1}
          value={String(inputRightButton)}
        />
        <TextInput
          style={appStyle.inputLeftButton}
          onChangeText={setInputLeftButton}
          editable={inputDisable}
          maxLength={1}
          value={String(inputLeftButton)}
        />
        <TextInput
          style={appStyle.inputBottomButton}
          onChangeText={setInputBottomButton}
          editable={inputDisable}
          maxLength={1}
          value={String(inputBottomButton)}
        />
        <TextInput
          style={appStyle.inputBlueButton}
          onChangeText={setInputBlueButton}
          editable={inputDisable}
          maxLength={1}
          value={String(inputBlueButton)}
        />
        <TextInput
          style={appStyle.inputYellowButton}
          onChangeText={setInputYellowButton}
          editable={inputDisable}
          maxLength={1}
          value={String(inputYellowButton)}
        />
        <TextInput
          style={appStyle.inputRedButton}
          onChangeText={setInputRedButton}
          editable={inputDisable}
          maxLength={1}
          value={String(inputRedButton)}
        />
        <TextInput
          style={appStyle.inputGreenButton}
          onChangeText={setInputGreenButton}
          editable={inputDisable}
          maxLength={1}
          value={String(inputGreenButton)}
        />
      </ImageBackground>
      <SizedBox vertical={30} />
      <View style={appStyle.startResetView}>
        <TouchableOpacity onPress={onSaveGamePad} onLongPress={onSaveGamePad}>
          <ImageBackground
            source={images.home.button}
            style={appStyle.imageButton}>
            <Text style={appStyle.textButton}>Save</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={onResetGamePad} onLongPress={onResetGamePad}>
          <ImageBackground
            source={images.home.button}
            style={appStyle.imageButton}>
            <Text style={appStyle.textButton}>Reset</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <SizedBox vertical={10} />
      <TouchableOpacity
        onPress={onSetShowShopping}
        onLongPress={onSetShowShopping}>
        <ImageBackground
          source={images.home.button}
          style={appStyle.imageButton}>
          <Text style={appStyle.textButton}>Buy</Text>
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
}

GamePad.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.number,
  isShowShopping: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
  isShowShopping: makeSelectIsShowShopping(),
});

export default connect(mapStateToProps)(GamePad);
