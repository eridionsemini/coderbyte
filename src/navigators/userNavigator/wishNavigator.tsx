import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {headerOptions, WishStackParamList} from '../types';
import Wish from '../../screens/wish';

const Stack = createStackNavigator<WishStackParamList>();

const WishStackNavi = () => {
  return (
    <Stack.Navigator initialRouteName="userWish">
      <Stack.Screen name="userWish" component={Wish} options={headerOptions} />
    </Stack.Navigator>
  );
};

export default () => {
  return <WishStackNavi />;
};
