import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './containers/App';

import { store } from './store';

LogBox.ignoreAllLogs();

function AppProvider() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
}

AppProvider.propTypes = {};

export default AppProvider;
