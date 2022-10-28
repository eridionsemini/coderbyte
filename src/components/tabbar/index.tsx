import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {BottomProps} from '../../navigators/types';
// @ts-ignore
import Home from '../../assets/icons/home.svg';
// @ts-ignore
import HomeSelected from '../../assets/icons/home-selected.svg';
// @ts-ignore
import Wish from '../../assets/icons/wish.svg';
// @ts-ignore
import WishSelected from '../../assets/icons/wish-selected';
// @ts-ignore
import Profile from '../../assets/icons/profile.svg';
// @ts-ignore
import ProfileSelected from '../../assets/icons/profile-selected.svg';

import styles from './styles';

const TabBar: React.FC<{
  navigation: BottomProps['navigation'];
  state: BottomProps['state'];
}> = ({navigation, state}) => {
  const handleIconDisplay = (index: number, focused: boolean) => {
    switch (index) {
      case 0:
        if (focused) {
          return <HomeSelected />;
        }
        return <Home />;

      case 1:
        if (focused) {
          return <WishSelected />;
        }
        return <Wish />;
      case 2:
        if (focused) {
          return <ProfileSelected />;
        }
        return <Profile />;

      default:
        return null;
    }
  };
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            style={styles.tabItem}
            key={index}
            accessibilityRole="button"
            onPress={onPress}>
            {handleIconDisplay(index, isFocused)}
            <Text
              style={
                isFocused ? styles.tabItemTextFocused : styles.tabItemText
              }>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
