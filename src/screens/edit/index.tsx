import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../../redux/user/userSlice';
import {isValidEmail} from '../../utils/utils';
import {AppDispatch, RootState} from '../../redux';
import {UserUpdateAttributes} from '../../redux/user/userSlice';
import {ProfileStackProps} from '../../navigators/types';

// @ts-ignore
import ArrowBack from '../../assets/icons/arrow-back-black.svg';
import styles from './styles';

const hitSlop = {left: 20, right: 20, top: 10, bottom: 10};

const EditProfile: React.FC<{
  navigation: ProfileStackProps['navigation'];
}> = ({navigation}) => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const {user} = useSelector((state: RootState) => state.user);
  const [email, setEmail] = useState<string>(user ? user.email : '');
  const [firstname, setFirstname] = useState<string>(
    user ? user.firstname : '',
  );
  const [lastname, setLastname] = useState<string>(user ? user.lastname : '');
  const [validMail, setValidMail] = useState<boolean>(true);
  const [validFirstname, setValidFirstname] = useState<boolean>(true);
  const [validLastname, setValidLastname] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const emailRef = React.createRef<TextInput>();
  const firstnameRef = React.createRef<TextInput>();
  const lastnameRef = React.createRef<TextInput>();

  const confirm = () => {
    if (!isValidEmail(email)) {
      setValidMail(false);
      setError('Email not valid');
      return;
    }

    if (!firstname.trim()) {
      setValidFirstname(false);
      setError('Firstname cannot be empty');
      return;
    }
    if (!lastname.trim()) {
      setValidLastname(false);
      setError('Lastname cannot be empty');
      return;
    }
    const data: UserUpdateAttributes = {
      id: user ? user.id : 0,
      email,
      firstname,
      lastname,
    };
    dispatch(updateUser(data));
    setDisabled(true);
  };

  return (
    <View>
      <View style={styles.navigationBar}>
        <TouchableOpacity hitSlop={hitSlop} onPress={() => navigation.goBack()}>
          <ArrowBack />
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={hitSlop}
          disabled={disabled}
          onPress={confirm}
          style={disabled ? styles.disabled : styles.confirmButton}>
          <Text
            style={disabled ? styles.confirmTextDisabled : styles.confirmText}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={validMail ? styles.input : styles.inputError}
          value={email}
          placeholder="email"
          ref={emailRef}
          onChangeText={text => {
            setEmail(text);
            setValidMail(true);
            setDisabled(false);
          }}
        />
        {!validMail ? <Text style={styles.error}>{error}</Text> : null}
        <TextInput
          value={firstname}
          style={validFirstname ? styles.input : styles.inputError}
          placeholder="firstname"
          ref={firstnameRef}
          onChangeText={text => {
            setFirstname(text);
            setValidFirstname(true);
            setDisabled(false);
          }}
        />
        {!validFirstname ? <Text style={styles.error}>{error}</Text> : null}
        <TextInput
          value={lastname}
          style={validLastname ? styles.input : styles.inputError}
          placeholder="lastname"
          ref={lastnameRef}
          onChangeText={text => {
            setLastname(text);
            setValidLastname(true);
            setDisabled(false);
          }}
        />
        {!validLastname ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    </View>
  );
};

export default EditProfile;
