import {StackScreenProps} from '@react-navigation/stack';
import {createNavigationContainerRef} from '@react-navigation/native';

export type RootStackParamList = {
  register: undefined;
  login: undefined;
};

export type RootStackProps = StackScreenProps<RootStackParamList>;

type HeaderOptions = {
  headerShown: boolean;
};

export const headerOptions: HeaderOptions = {
  headerShown: false,
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();
