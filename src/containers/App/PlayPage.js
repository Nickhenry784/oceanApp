import React, { useEffect, useState, useRef } from 'react';
import PropTypes, { element } from 'prop-types';
import { View, Image, Animated } from 'react-native';
import { connect } from 'react-redux';
import { randomIntFromInterval } from 'utils/number';
import { decrementTurn, setPlayState } from './actions';
import { appStyle, firstStyle } from './style';

function PlayPage({ dispatch, first }) {
  const [time, setTime] = useState(2000);
  const [position, setPosition] = useState({
    top: 200,
    left: 200,
  });
  const [isTurnLeft, setTurnLeft] = useState(randomIntFromInterval(0, 1));
  const [isTurnTop, setTurnTop] = useState(randomIntFromInterval(0, 1));

  useEffect(() => {
    const timeEachTurn = 5;
    const timeout = setTimeout(() => {
      if (time <= 0) {
        dispatch(setPlayState(false));
        dispatch(decrementTurn());
        return false;
      }
      if (time % 100 === 0) setTurnLeft(randomIntFromInterval(0, 1));
      if (time % 200 === 0) setTurnTop(randomIntFromInterval(0, 1));
      setTime(time - timeEachTurn);
      setPosition({
        top:
          randomIntFromInterval(0, 10) < 8
            ? position?.top + randomIntFromInterval(0, 1) * (isTurnTop ? -1 : 1)
            : position?.top,
        left:
          position?.left + randomIntFromInterval(0, 3) * (isTurnLeft ? -1 : 1),
      });
    }, timeEachTurn);
    return () => {
      clearTimeout(timeout);
    };
  }, [position]);

  return (
    <View style={appStyle.homeView}>
      <Animated.View
        style={[
          {
            width: 30,
            height: 30,
            position: 'absolute',
            top: position?.top,
            left: position?.left,
            transform: [
              {
                rotateY: isTurnLeft ? '0deg' : '180deg',
              },
            ],
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
