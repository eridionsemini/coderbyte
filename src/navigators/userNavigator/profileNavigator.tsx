import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {headerOptions, ProfileStackParamList} from '../types';
import Profile from '../../screens/profile';

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStackNavi = () => {
  return (
    <Stack.Navigator initialRouteName="userProfile">
      <Stack.Screen
        name="userProfile"
        component={Profile}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
};

export default () => {
  return <ProfileStackNavi />;
};
