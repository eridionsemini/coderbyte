import React, {useRef, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import type {AppDispatch} from '../../redux';
import {
  getCurrentUser,
  login,
  register,
  UserLoginAttributes,
  UserRegisterAttributes,
} from '../../redux/user/userSlice';
import AuthModal, {IModal} from '../../popup/auth';
import {AuthOptions} from './types';
import Login from '../../components/login';
import Register from '../../components/register';

const Profile = () => {
  const [option, setOption] = useState<AuthOptions>(AuthOptions.LOGIN);
  const modalRef = useRef<IModal>();
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  const tryLogin = async (email: string, password: string) => {
    const data: UserLoginAttributes = {email, password};
    await dispatch(login(data));
    await dispatch(getCurrentUser({}));
  };

  const tryRegister = async (
    email: string,
    password: string,
    firstname: string,
    lastname: string,
  ) => {
    const data: UserRegisterAttributes = {email, password, firstname, lastname};
    await dispatch(register(data));
    await dispatch(getCurrentUser({}));
  };

  return (
    <SafeAreaView>
      <View>
        <AuthModal ref={modalRef as React.RefObject<AuthModal>}>
          {option === AuthOptions.LOGIN ? (
            <Login
              tryLogin={tryLogin}
              setOption={() => setOption(AuthOptions.REGISTER)}
            />
          ) : (
            <Register
              tryRegister={tryRegister}
              setOption={() => setOption(AuthOptions.LOGIN)}
            />
          )}
        </AuthModal>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
