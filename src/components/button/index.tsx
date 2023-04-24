import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const Button: React.FC<{
  title: string;
  disabled: boolean;
  onPress: () => void;
}> = ({title, disabled, onPress}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={disabled ? styles.buttonDisabled : styles.button}>
      <Text style={disabled ? styles.buttonTextDisabled : styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
