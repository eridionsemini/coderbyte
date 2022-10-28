import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {PokemonTypes} from './types';
import {RootStackProps} from '../../navigators/types';
import {determinePokemonColor} from '../../utils/utils';
import styles from './styles';

const Pokemon: React.FC<{
  name: string;
  id: number;
  image: string;
  types: Array<PokemonTypes>;
  navigation: RootStackProps['navigation'];
}> = ({name, id, image, types, navigation}) => {
  const handlePokemonPress = (pokemonId: number) => {
    navigation.navigate('PokemonDetail', {id: pokemonId});
  };

  return (
    <TouchableOpacity
      onPress={() => handlePokemonPress(id)}
      style={[
        styles.card,
        {backgroundColor: determinePokemonColor(types[0].type.name)},
      ]}>
      <View>
        <Text style={styles.name}>{name}</Text>
        {types.map((type: PokemonTypes, key) => {
          return (
            <View key={key} style={styles.typeContainer}>
              <Text style={styles.typeContainerText}>{type.type.name}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.imageWrapper}>
        <View style={styles.imageBackFirstPart} />
        <View style={styles.secondCircle} />
        <View style={styles.thirdCircle} />
        <View style={styles.imageBackSecondPart} />
        <FastImage source={{uri: image}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default Pokemon;
