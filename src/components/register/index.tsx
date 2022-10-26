import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
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
  const emailRef = React.createRef<TextInput>();
  const passwordRef = React.createRef<TextInput>();
  const firstnameRef = React.createRef<TextInput>();
  const lastnameRef = React.createRef<TextInput>();

  const defineDisable = () => {
    return (
      email === '' && password === '' && firstname === '' && lastname === ''
    );
  };

  return (
    <View style={styles.register}>
      <Text style={styles.title}>Register to Pokedex</Text>
      <TextInput
        style={styles.input}
        value={email}
        ref={emailRef}
        returnKeyType="next"
        onSubmitEditing={() => firstnameRef.current?.focus()}
        placeholder="email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        value={firstname}
        ref={firstnameRef}
        returnKeyType="next"
        onSubmitEditing={() => lastnameRef.current?.focus()}
        placeholder="firstname"
        onChangeText={setFirstname}
      />
      <TextInput
        style={styles.input}
        value={lastname}
        ref={lastnameRef}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
        placeholder="lastname"
        onChangeText={setLastname}
      />
      <TextInput
        style={styles.input}
        value={password}
        ref={passwordRef}
        returnKeyType="go"
        onSubmitEditing={() =>
          tryRegister(email, password, firstname, lastname)
        }
        placeholder="password"
        onChangeText={setPassword}
      />
      <TouchableOpacity
        disabled={defineDisable()}
        onPress={() => tryRegister(email, password, firstname, lastname)}
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
