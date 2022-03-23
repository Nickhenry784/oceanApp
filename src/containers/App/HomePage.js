import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import { images } from 'assets/images';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SizedBox } from 'sizedbox';
import { makeSelectIsPlayState, makeSelectTurn } from './selectors';
import { appStyle, firstStyle } from './style';
import firstData from './data/firstData';
import PlayPage from './PlayPage';
import { setPlayState } from './actions';

function HomePage({ dispatch, turn, isPlayState }) {
  const [firstItem, setFirstItem] = useState(null);

  const onClickFirstItem = value => {
    if (turn === 0) return Alert.alert('Please buy more turn');
    dispatch(setPlayState(true));
    // console.log(listPositionValue.length);
    setFirstItem(value);
  };

  return isPlayState ? (
    <PlayPage first={firstItem} />
  ) : (
    <View style={appStyle.homeView}>
      <SizedBox vertical={40} />
      <Image source={images.home.welcomeText} style={appStyle.welcomeText} />
      <SizedBox vertical={10} />
      <View style={appStyle.firstView}>
        {firstData.map(first => (
          <TouchableOpacity
            onPress={() => onClickFirstItem(first)}
            onLongPress={() => onClickFirstItem(first)}
            style={firstStyle(first.x, first.y)}
            key={first.id}>
            <Image source={first.image} style={appStyle.firstImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.number,
  isPlayState: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
  isPlayState: makeSelectIsPlayState(),
});

export default connect(mapStateToProps)(HomePage);
