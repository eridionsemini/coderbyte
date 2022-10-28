import React from 'react';
import {TouchableOpacity, VirtualizedList, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Wish} from '../../../redux/wish/wishSlice';
import {RootStackProps} from '../../../navigators/types';
import {determinePokemonColor} from '../../../utils/utils';
// @ts-ignore
import HeartRed from '../../../assets/icons/heart-red.svg';
import styles from './style';

const hitSlop = {left: 20, right: 20, top: 10, bottom: 10};

type MapElement = {
  item: Wish;
  index: number;
};

const WishList: React.FC<{
  data: Array<Wish>;
  navigation: RootStackProps['navigation'];
  ListHeaderComponent: () => JSX.Element;
  ListEmptyComponent: () => JSX.Element;
}> = ({data, navigation, ListHeaderComponent, ListEmptyComponent}) => {
  const renderItem = ({item, index}: MapElement) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() =>
          navigation.navigate('PokemonDetail', {id: item.pokemonId})
        }
        style={[
          styles.pokemonContainer,
          {
            backgroundColor: determinePokemonColor(item.types[0].type.name),
          },
        ]}>
        <View>
          <Text style={styles.id}># {item.pokemonId}</Text>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.types}>
            {item.types.map((type, key) => {
              return (
                <View key={key} style={styles.type}>
                  <Text style={styles.typeText}>{type.type.name}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.imageWrapper}>
          <View style={styles.halfCircleTop} />
          <View style={styles.halfCircleBottom} />
          <View
            style={[
              styles.innerCircle,
              {
                backgroundColor: determinePokemonColor(item.types[0].type.name),
              },
            ]}
          />
          <FastImage style={styles.image} source={{uri: item.image}} />
          <TouchableOpacity style={styles.heart} hitSlop={hitSlop}>
            <HeartRed />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const getItemCount = () => data.length;
  const getItem = (d: Array<Wish>, index: number) => d[index];
  const keyExtractor = (item: Wish, index: number) => index.toString();

  return (
    <VirtualizedList
      renderItem={renderItem}
      getItem={getItem}
      getItemCount={getItemCount}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      keyExtractor={keyExtractor}
      ListEmptyComponent={ListEmptyComponent}
      ListHeaderComponent={ListHeaderComponent}
      data={data}
    />
  );
};

export default WishList;
