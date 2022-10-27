import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';

export type BottomTabNaviParams = {
  home: undefined;
  wish: undefined;
  profile: undefined;
};

export type BottomProps = BottomTabBarProps;

export type RootStackParamList = {
  UserTabNavi: BottomTabNaviParams;
  PokemonDetail: {id: number};
};

export type RootStackProps = StackScreenProps<
  RootStackParamList,
  'PokemonDetail',
  'MyStack'
>;

export type HomeStackParamList = {
  userHome: undefined;
};

export type ProfileStackParamList = {
  userProfile: undefined;
  userEdit: undefined;
};

export type ProfileStackProps = StackScreenProps<ProfileStackParamList>;

export type WishStackParamList = {
  userWish: undefined;
};

type HeaderOptions = {
  headerShown: boolean;
};

export const headerOptions: HeaderOptions = {
  headerShown: false,
};
