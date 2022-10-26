import React, {useMemo} from 'react';
import {TouchableOpacity, VirtualizedList, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {determinePokemonColor} from '../../../utils/utils';
import HeartRed from '../../../assets/icons/heart-red.svg';
import styles from './style';

const hitSlop = {left: 20, right: 20, top: 10, bottom: 10};

const WishList = ({data, navigation, ListHeaderComponent}) => {
  const renderItem = ({item, index}) => {
    console.log('item',item);
    return (
      <TouchableOpacity
        key={index}
        onPress={() =>
          navigation.navigate('PokemonDetail', {id: item.pokemonId})
        }
        style={[
          styles.pokemonContainer,
          {
            backgroundColor: determinePokemonColor(
              item.types[0].type.name,
            ),
          },
        ]}>
        <View style={styles.info}>
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
                backgroundColor: determinePokemonColor(
                  item.types[0].type.name,
                ),
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
  const getItem = (d, index) => d[index];
  const keyExtractor = (item, index) => index;

  return useMemo(() => {
    return (
      <VirtualizedList
        renderItem={renderItem}
        getItem={getItem}
        getItemCount={getItemCount}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        keyExtractor={keyExtractor}
        ListHeaderComponent={ListHeaderComponent}
        data={data}
      />
    );
  }, [data]);
};

export default WishList;
