import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  turn: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: '5%',
    left: '5%',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  shoppingButton: {
    position: 'absolute',
    top: '4%',
    right: '4%',
  },

  shoppingImage: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },
  textBack: {
    fontSize: 24,
    color: 'white',
    position: 'absolute',
    top: '3%',
    left: '3%',
  },

  textClock: {
    position: 'relative',
    top: 20,
    fontSize: 120,
    color: 'white',
    fontWeight: '500',
  },

  clockStyle: {
    width: 300,
    height: 300,
    flex: 0.52,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStartButton: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: '40%',
    left: '35%',
  },

  startImage: {
    width: 230,
    height: 80,
  },

  viewCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gamepadImage: {
    alignContent: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },

  inputTopButton: {
    position: 'absolute',
    top: '1%',
    left: '18%',
    height: 50,
    width: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    fontSize: 20,
  },
  inputLeftButton: {
    position: 'absolute',
    top: '45%',
    left: '-10%',
    height: 50,
    width: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    fontSize: 20,
  },

  inputRightButton: {
    position: 'absolute',
    bottom: '-12%',
    left: '37%',
    height: 50,
    width: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    fontSize: 20,
  },
  inputBottomButton: {
    position: 'absolute',
    bottom: '-17%',
    left: '18%',
    height: 50,
    width: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    fontSize: 20,
  },
  inputBlueButton: {
    position: 'absolute',
    top: '-17%',
    right: '30%',
    height: 50,
    width: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    fontSize: 20,
  },
  inputYellowButton: {
    position: 'absolute',
    top: '0%',
    right: '16%',
    height: 50,
    width: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    fontSize: 20,
  },
  inputRedButton: {
    position: 'absolute',
    top: '50%',
    right: '-10%',
    height: 50,
    width: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    fontSize: 20,
  },
  inputGreenButton: {
    position: 'absolute',
    bottom: '0%',
    right: '23%',
    height: 50,
    width: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    fontSize: 20,
  },

  startResetView: {
    flex: 0.2,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
  imageButton: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  textButton: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
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
