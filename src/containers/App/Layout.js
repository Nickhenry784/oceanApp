import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, View } from 'react-native';
import { images } from 'assets/images';
import { layoutStyle } from './style';

function Layout({ children }) {
  return (
    <ImageBackground
      source={images.home.background}
      style={layoutStyle.background}>
      <View style={layoutStyle.children}>{children}</View>
    </ImageBackground>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
