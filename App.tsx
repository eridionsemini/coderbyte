import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import store from './src/redux';
import RootNavigator from './src/navigators/rootNavigator';
LogBox.ignoreLogs([]);

const persistedStore = persistStore(store);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
