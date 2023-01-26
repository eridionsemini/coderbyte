import React from 'react';
import {FormValues, Name, ReturnKeyType} from '../types';
import {Control, useController} from 'react-hook-form';
import {TextInput, StyleProp, TextStyle} from 'react-native';

const Input: React.FC<{
  name: Name;
  control: Control<FormValues>;
  onSubmitEditing?: () => void;
  returnKeyType: ReturnKeyType;
  style: StyleProp<TextStyle>;
  secureTextEntry: boolean;
}> = ({
  name,
  control,
  onSubmitEditing,
  returnKeyType,
  style,
  secureTextEntry,
}) => {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });
  return (
    <TextInput
      placeholder={name}
      style={style}
      value={field.value}
      onSubmitEditing={onSubmitEditing}
      returnKeyType={returnKeyType}
      secureTextEntry={secureTextEntry}
      onChangeText={field.onChange}
    />
  );
};

Input.defaultProps = {
  secureTextEntry: false,
};

export default Input;
