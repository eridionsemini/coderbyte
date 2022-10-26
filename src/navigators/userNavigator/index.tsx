import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../../components/tabbar';
import HomeNavigator from './homeNavigator';
import WishNavigator from './wishNavigator';
import ProfileNavigator from './profileNavigator';
import {headerOptions} from '../types';

const Tab = createBottomTabNavigator();

const UserTabNavi = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="home"
        component={HomeNavigator}
        options={headerOptions}
      />
      <Tab.Screen
        name="wish"
        component={WishNavigator}
        options={headerOptions}
      />
      <Tab.Screen
        name="profile"
        component={ProfileNavigator}
        options={headerOptions}
      />
    </Tab.Navigator>
  );
};

export default () => {
  return <UserTabNavi />;
};
