import { StyleSheet } from 'react-native';

export const firstStyle = (x, y) =>
  StyleSheet.create({
    width: 80,
    height: 80,
    position: 'absolute',
    top: x,
    left: y,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  });

export const appStyle = StyleSheet.create({
  buyImage: {
    position: 'absolute',
    top: '10%',
    right: '5%',
    width: 130,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  turnText: {
    fontFamily: 'LightBeach',
    fontSize: 20,
    color: 'white',
  },
  backText: {
    position: 'absolute',
    paddingTop: 20,
    left: '5%',
    fontFamily: 'LightBeach',
    fontSize: 20,
    color: 'black',
  },
  homeView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  welcomeText: {
    width: 250,
    height: 30,
  },
  firstView: {
    width: '90%',
    height: 500,
  },

  firstImage: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
  },
});

export const musicsStyle = StyleSheet.create({
  musicWrapper: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '50%',
  },
  musicButton: {
    padding: 10,
    backgroundColor: 'gray',
  },
  musicButtonTitle: {
    color: 'green',
  },
});

export const layoutStyle = StyleSheet.create({
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  land: {
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40%',
  },
  children: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 3,
    elevation: 3,
  },
});

export const paymentStyle = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const buttonStyle = StyleSheet.create({
  buttons: {
    padding: 10,
    paddingTop: 30,
    top: '10%',
    zIndex: 3,
    elevation: 3,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    textAlign: 'center',
    padding: 5,
  },
  buttonText: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 2,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderWidth: 2,
    borderColor: '#fff',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSmall: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
