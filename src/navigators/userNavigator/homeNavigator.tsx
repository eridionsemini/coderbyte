import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeStackParamList, headerOptions} from '../types';
import Home from '../../screens/home';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackNavi = () => {
  return (
    <Stack.Navigator initialRouteName="userHome">
      <Stack.Screen name="userHome" component={Home} options={headerOptions} />
    </Stack.Navigator>
  );
};

export default () => {
  return <HomeStackNavi />;
};
