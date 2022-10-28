import React from 'react';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import Toast from 'react-native-toast-notifications';
import 'react-native-gesture-handler';
import store from './src/redux';
import RootNavigator from './src/navigators/rootNavigator';
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
      <Toast
        duration={1500}
        animationDuration={150}
        swipeEnabled
        animationType="zoom-in"
        placement={'top'}
        offsetTop={50}
        ref={ref => (global.toast = ref)}
      />
    </Provider>
  );
};

export default App;
