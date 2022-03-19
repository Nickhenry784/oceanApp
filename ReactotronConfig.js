/* eslint-disable import/no-extraneous-dependencies */
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .configure({
    name: 'React Native Demo',
  })
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage./ just turning off overlay
  }) // add all built-in react native plugins
  .use(trackGlobalErrors())
  .connect(); // let's connect!
