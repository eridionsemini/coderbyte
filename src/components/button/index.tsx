import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const hitSlop = {
  left: 10,
  right: 10,
  top: 20,
  bottom: 20,
};

const Button: React.FC<{
  title: string;
  disabled: boolean;
  onPress: () => void;
}> = ({title, disabled, onPress}) => {
  return (
    <TouchableOpacity
      hitSlop={hitSlop}
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
