import React from 'react';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import store from './src/redux';
import RootNavigator from './src/navigators/rootNavigator';
LogBox.ignoreLogs([]);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
