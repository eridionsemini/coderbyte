import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

// @ts-ignore
const AvatarImage: React.FC<{
  avatar: string | null;
  selectImage: () => void;
}> = ({avatar, selectImage}) => {
  if (!avatar) {
    return (
      <TouchableOpacity style={styles.pickerArea} onPress={selectImage}>
        <Text style={styles.pickText}>Tap to add avatar</Text>
      </TouchableOpacity>
    );
  }

  if (avatar) {
    return <FastImage style={styles.avatar} source={{uri: avatar}} />;
  }
};

export default AvatarImage;
