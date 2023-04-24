import React, {useState} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {saveUserData} from '../../redux/auth/authSlice';
import {isValidEmail} from '../../utils/utils';
import Button from '../../components/button';
import styles from './styles';
import CommonStyles from '../../constants/styles';
import {RootStackProps} from '../../navigators/types';
import {AppDispatch} from '../../redux';

const Register: React.FC<{
  navigation: RootStackProps['navigation'];
}> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstname, setFirstname] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [validMail, setValidMail] = useState<boolean>(true);
  const [validPassword, setValidPassword] = useState<boolean>(true);

  const emailRef = React.createRef<TextInput>();
  const passwordRef = React.createRef<TextInput>();
  const firstnameRef = React.createRef<TextInput>();
  const websiteRef = React.createRef<TextInput>();

  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  const defineDisable = () => email === '' || password === '';

  const submit = () => {
    if (!isValidEmail(email)) {
      setValidMail(false);
      setErrorMsg('Email not valid');
      return;
    }
    if (password.trim().length < 6) {
      setValidPassword(false);
      setErrorMsg('Password must be at least 6 characters');
      return;
    }
    dispatch(
      saveUserData({
        email,
        password,
        firstname,
        website,
        avatar: '',
      }),
    );
    navigation.navigate('login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.register}>
        <Text style={styles.title}>Profile Creation</Text>
        <Text style={[styles.subtitle, CommonStyles.mv8]}>
          Use the form below to submit your portofolio
        </Text>
        <Text style={[styles.subtitle, CommonStyles.mb16]}>
          Email and password are required
        </Text>
        <TextInput
          style={styles.input}
          value={firstname}
          underlineColorAndroid="transparent"
          ref={firstnameRef}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current?.focus()}
          placeholder="Firstname"
          onChangeText={text => setFirstname(text)}
        />
        <TextInput
          style={validMail ? styles.input : styles.inputError}
          value={email}
          ref={emailRef}
          underlineColorAndroid="transparent"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
          placeholder="Email"
          onChangeText={text => {
            setEmail(text);
            setValidMail(true);
          }}
        />
        {!validMail ? <Text style={styles.error}>{errorMsg}</Text> : null}

        <TextInput
          style={validPassword ? styles.input : styles.inputError}
          value={password}
          ref={passwordRef}
          secureTextEntry
          underlineColorAndroid="transparent"
          returnKeyType="next"
          onSubmitEditing={() => websiteRef.current?.focus()}
          placeholder="Password"
          onChangeText={text => {
            setPassword(text);
            setValidPassword(true);
          }}
        />
        {!validPassword ? <Text style={styles.error}>{errorMsg}</Text> : null}
        <TextInput
          style={styles.input}
          value={website}
          ref={websiteRef}
          underlineColorAndroid="transparent"
          returnKeyType="go"
          placeholder="Website"
          onChangeText={text => setWebsite(text)}
        />
      </View>
      <Button title="Submit" disabled={defineDisable()} onPress={submit} />
    </SafeAreaView>
  );
};

export default Register;
