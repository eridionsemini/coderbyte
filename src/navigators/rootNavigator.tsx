import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/register';
import Login from '../screens/login';
import {RootStackParamList, headerOptions, navigationRef} from './types';
import {colors} from '../constants/colors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.WHITE,
  },
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavi = () => {
  return (
    <Stack.Navigator
      initialRouteName="register"
      screenOptions={{
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
        gestureEnabled: false,
        animationEnabled: false,
        headerShown: false,
      }}>
      <Stack.Screen
        name="register"
        component={Register}
        options={headerOptions}
      />
      <Stack.Screen name="login" component={Login} options={headerOptions} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer theme={theme} ref={navigationRef}>
      <RootStackNavi />
    </NavigationContainer>
  );
};

export default RootNavigator;
