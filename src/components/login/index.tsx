import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

const Login: React.FC<{
  tryLogin: (email: string, password: string) => void;
  setOption: () => void;
}> = ({tryLogin, setOption}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const emailRef = React.createRef<TextInput>();
  const passwordRef = React.createRef<TextInput>();
  return (
    <View style={styles.login}>
      <Text style={styles.title}>Welcome to Pokedex</Text>
      <TextInput
        style={styles.input}
        value={email}
        ref={emailRef}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
        placeholder="email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        value={password}
        ref={passwordRef}
        placeholder="password"
        returnKeyType="go"
        onSubmitEditing={() => tryLogin(email, password)}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        disabled={email === '' || password === ''}
        onPress={() => tryLogin(email, password)}
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
        <Text>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
