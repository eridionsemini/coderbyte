import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux';
import {
  getCurrentUser,
  login,
  register,
  UserLoginAttributes,
  UserRegisterAttributes,
} from '../../redux/user/userSlice';
import AuthModal, {IModal} from '../../popup/auth';
import {AuthOptions} from './types';
import Login from '../login';
import Register from '../register';
import styles from './styles';

const hitSlop = {left: 20, right: 20, top: 10, bottom: 10};

const Auth: React.FC<{
  title: string;
  description?: string;
}> = ({title, description}) => {
  const [option, setOption] = useState<AuthOptions>(AuthOptions.LOGIN);
  const modalRef = useRef<IModal>();

  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  const tryLogin = async (email: string, password: string) => {
    const data: UserLoginAttributes = {email, password};
    await dispatch(login(data));
    await dispatch(getCurrentUser({}));
    modalRef.current?.close();
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
    modalRef.current?.close();
  };

  const outTouch = () => {
    modalRef.current?.close();
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity
          onPress={() => modalRef.current?.open()}
          style={styles.loginWrapper}
          hitSlop={hitSlop}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      </View>
      <AuthModal
        outTouch={outTouch}
        ref={modalRef as React.RefObject<AuthModal>}>
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
  );
};

export default Auth;
