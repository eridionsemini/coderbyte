import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {Move} from './types';
import styles from './styles';

type MapItem = {
  item: Move;
  index: number;
};

const Moves: React.FC<{
  data: Array<Move>;
  backgroundColor: string;
}> = ({data, backgroundColor}) => {
  const renderItem = ({item, index}: MapItem) => {
    return (
      <View key={index} style={[styles.moveContainer, {backgroundColor}]}>
        <Text style={styles.moveText}>{item.move.name}</Text>
      </View>
    );
  };
  const keyExtractor = (item: any, index: number) =>
    item.move ? item.move.name.concat(index.toString()) : index;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      removeClippedSubviews={true}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.contentContainerStyle}
      numColumns={3}
      horizontal={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Moves;
