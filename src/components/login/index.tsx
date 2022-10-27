import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {isValidEmail} from '../../utils/utils';
import styles from './styles';

const Login: React.FC<{
  tryLogin: (email: string, password: string) => void;
  setOption: () => void;
}> = ({tryLogin, setOption}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [validPassword, setValidPassword] = useState<boolean>(true);
  const emailRef = React.createRef<TextInput>();
  const passwordRef = React.createRef<TextInput>();

  const submit = () => {
    if (!isValidEmail(email)) {
      setValidEmail(false);
      setErrorMsg('Email not valid');
      return;
    }

    if (password.trim().length < 6) {
      setValidPassword(false);
      setErrorMsg('Password must be at least 6 characters');
      return;
    }

    tryLogin(email, password);
  };
  return (
    <View style={styles.login}>
      <Text style={styles.title}>Welcome to Pokedex</Text>
      <TextInput
        style={validEmail ? styles.input : styles.inputError}
        value={email}
        ref={emailRef}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
        placeholder="email"
        onChangeText={text => {
          setEmail(text);
          setValidEmail(true);
        }}
      />
      {!validEmail ? <Text style={styles.error}>{errorMsg} </Text> : null}
      <TextInput
        style={validPassword ? styles.input : styles.inputError}
        value={password}
        ref={passwordRef}
        placeholder="password"
        returnKeyType="go"
        onSubmitEditing={submit}
        onChangeText={text => {
          setValidPassword(true);
          setPassword(text);
        }}
      />
      {!validPassword ? <Text style={styles.error}>{errorMsg} </Text> : null}
      <TouchableOpacity
        disabled={email === '' || password === ''}
        onPress={submit}
        style={
          email === '' || password === ''
            ? styles.loginButtonDisabled
            : styles.loginButton
        }>
        <Text
          style={
            email === '' || password === ''
              ? styles.loginButtonTextDisabled
              : styles.loginButtonText
          }>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountLogin} onPress={setOption}>
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
