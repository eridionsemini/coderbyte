import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z, string} from 'zod';
import Input from './input';
import {FormValues} from './types';
import styles from './styles';

const Login: React.FC<{
  tryLogin: (email: string, password: string) => void;
  setOption: () => void;
}> = ({tryLogin, setOption}) => {
  const schema = z.object({
    email: string().email(),
    password: string().min(6),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({resolver: zodResolver(schema)});

  const submit = ({email, password}: FormValues) => tryLogin(email, password);

  return (
    <View style={styles.login}>
      <Text style={styles.title}>Welcome to Pokedex</Text>
      <Input
        name="email"
        secureTextEntry={false}
        style={errors.email ? styles.inputError : styles.input}
        returnKeyType="next"
        control={control}
      />
      {errors.email ? (
        <Text style={styles.error}>{errors.email.message} </Text>
      ) : null}
      <Input
        style={errors.password ? styles.inputError : styles.input}
        name="password"
        control={control}
        secureTextEntry={true}
        onSubmitEditing={handleSubmit(submit)}
        returnKeyType="go"
      />
      {errors.password ? (
        <Text style={styles.error}>{errors.password.message} </Text>
      ) : null}
      <TouchableOpacity
        onPress={handleSubmit(submit)}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountLogin} onPress={setOption}>
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
