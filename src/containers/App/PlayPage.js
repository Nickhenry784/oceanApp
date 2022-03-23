import React, { useEffect, useState, useRef } from 'react';
import PropTypes, { element } from 'prop-types';
import { View, Image, Animated } from 'react-native';
import { connect } from 'react-redux';
import Easing from 'react-native/Libraries/Animated/Easing';
import { decrementTurn, setPlayState } from './actions';
import { appStyle, firstStyle } from './style';

function PlayPage({ dispatch, first }) {
  const [time, setTime] = useState(1);
  const pan = useRef(
    new Animated.ValueXY({
      x: Math.floor(Math.random() * 100) + 1,
      y: Math.floor(Math.random() * 100) + 1,
    }),
  ).current;

  useEffect(() => {
    const same = () => {
      if (time > 0) {
        setTime(time - 1);
      }
    };
    const same1 = () => {
      if (time === 0) {
        dispatch(decrementTurn());
        dispatch(setPlayState(false));
      }
    };
    const time1 = setTimeout(same, 1000);
    const time2 = setTimeout(same1, 12000);
    Animated.loop(
      Animated.sequence([
        Animated.timing(pan, {
          toValue: {
            x: Math.floor(Math.random() * 100) + 1,
            y: Math.floor(Math.random() * 100) + 1,
          },
          duration: 1000,
          delay: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(pan, {
          toValue: {
            x: Math.floor(Math.random() * 100) + 1,
            y: Math.floor(Math.random() * 100) + 1,
          },
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pan, {
          toValue: {
            x: Math.floor(Math.random() * 100) + 1,
            y: Math.floor(Math.random() * 100) + 1,
          },
          duration: 1000,
          delay: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(pan, {
          toValue: {
            x: Math.floor(Math.random() * 100) + 1,
            y: Math.floor(Math.random() * 100) + 1,
          },
          duration: 2000,
          delay: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(pan, {
          toValue: {
            x: Math.floor(Math.random() * 100) + 1,
            y: Math.floor(Math.random() * 100) + 1,
          },
          duration: 3000,
          delay: 6000,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 1,
      },
    ).start();
    return () => {
      clearTimeout(time1);
      clearTimeout(time2);
    };
  }, [pan, time]);

  return (
    <View style={appStyle.homeView}>
      <Animated.View
        style={[
          { width: 30, height: 30, position: 'absolute', top: 0, left: 0 },
          {
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          },
        ]}>
        <Image source={first.image} style={appStyle.firstImage} />
      </Animated.View>
    </View>
  );
}

PlayPage.propTypes = {
  dispatch: PropTypes.func,
  first: PropTypes.object,
};

export default connect()(PlayPage);
