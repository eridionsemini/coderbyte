import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import type {AppDispatch} from '../../redux';
import {
  getCurrentUser,
  login,
  UserLoginAttributes,
} from '../../redux/user/userSlice';

const Profile = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const data: UserLoginAttributes = {
    email: 'eridionsemini@gmail.com',
    password: 'test1234',
  };

  const tryLogin = async () => {
    await dispatch(login(data));
    await dispatch(getCurrentUser({}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={tryLogin}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
export default Profile;
