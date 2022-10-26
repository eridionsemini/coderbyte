import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserTabNavi from './userNavigator';
import PokemonDetail from '../screens/detail';
import {RootStackParamList, headerOptions} from './types';
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
      initialRouteName="UserTabNavi"
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
        name="UserTabNavi"
        component={UserTabNavi}
        options={headerOptions}
      />
      <Stack.Screen
        name="PokemonDetail"
        initialParams={{id: 0}}
        component={PokemonDetail}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {

  return (
    <NavigationContainer theme={theme}>
      <RootStackNavi />
    </NavigationContainer>
  );
};

export default RootNavigator;
