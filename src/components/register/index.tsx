import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {isValidEmail} from '../../utils/utils';
import styles from './styles';

const Register: React.FC<{
  tryRegister: (
    email: string,
    password: string,
    firstname: string,
    lastname: string,
  ) => void;
  setOption: () => void;
}> = ({tryRegister, setOption}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [validMail, setValidMail] = useState<boolean>(true);
  const [validPassword, setValidPassword] = useState<boolean>(true);
  const [validFirstname, setValidFirstname] = useState<boolean>(true);
  const [validLastname, setValidLastname] = useState<boolean>(true);
  const emailRef = React.createRef<TextInput>();
  const passwordRef = React.createRef<TextInput>();
  const firstnameRef = React.createRef<TextInput>();
  const lastnameRef = React.createRef<TextInput>();

  const defineDisable = () => {
    return (
      email === '' && password === '' && firstname === '' && lastname === ''
    );
  };

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
    if (!firstname.trim()) {
      setValidFirstname(false);
      setErrorMsg('Firstname cannot be empty');
      return;
    }

    if (!lastname.trim()) {
      setValidLastname(false);
      setErrorMsg('Lastname cannot be empty');
      return;
    }

    tryRegister(email, password, firstname, lastname);
  };

  return (
    <View style={styles.register}>
      <Text style={styles.title}>Register to Pokedex</Text>
      <TextInput
        style={validMail ? styles.input : styles.inputError}
        value={email}
        ref={emailRef}
        returnKeyType="next"
        onSubmitEditing={() => firstnameRef.current?.focus()}
        placeholder="Email"
        onChangeText={text => {
          setEmail(text);
          setValidMail(true);
        }}
      />
      {!validMail ? <Text style={styles.error}>{errorMsg}</Text> : null}
      <TextInput
        style={validFirstname ? styles.input : styles.inputError}
        value={firstname}
        ref={firstnameRef}
        returnKeyType="next"
        onSubmitEditing={() => lastnameRef.current?.focus()}
        placeholder="Firstname"
        onChangeText={text => {
          setFirstname(text);
          setValidFirstname(true);
        }}
      />
      {!validFirstname ? <Text style={styles.error}>{errorMsg}</Text> : null}
      <TextInput
        style={validLastname ? styles.input : styles.inputError}
        value={lastname}
        ref={lastnameRef}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
        placeholder="Lastname"
        onChangeText={text => {
          setLastname(text);
          setValidLastname(true);
        }}
      />
      {!validLastname ? <Text style={styles.error}>{errorMsg}</Text> : null}
      <TextInput
        style={validPassword ? styles.input : styles.inputError}
        value={password}
        ref={passwordRef}
        returnKeyType="go"
        onSubmitEditing={submit}
        placeholder="Password"
        onChangeText={text => {
          setPassword(text);
          setValidPassword(true);
        }}
      />
      {!validPassword ? <Text style={styles.error}>{errorMsg}</Text> : null}
      <TouchableOpacity
        disabled={defineDisable()}
        onPress={submit}
        style={
          defineDisable()
            ? styles.registerButtonDisabled
            : styles.registerButton
        }>
        <Text
          style={
            defineDisable()
              ? styles.registerButtonTextDisabled
              : styles.registerButtonText
          }>
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={setOption} style={styles.backLogin}>
        <Text style={styles.backLoginText}>Back to login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
