import React from 'react';
import {VirtualizedList, View, Text} from 'react-native';
import {Move} from './types';
import styles from './styles';

type MapItem = {
  item: Array<Move>;
  index: number;
};

const Moves: React.FC<{
  data: Array<Move>;
  backgroundColor: string;
  columns: number;
}> = ({data, backgroundColor, columns}) => {
  const renderItem = ({item, index}: MapItem) => {
    return (
      <View key={index} style={styles.flexRowCenter}>
        {item.map((move: Move, idx: number) => {
          return (
            <View key={idx} style={[styles.moveContainer, {backgroundColor}]}>
              <Text style={styles.moveText}>{move.move.name}</Text>
            </View>
          );
        })}
      </View>
    );
  };

  const getItem = (d: Array<Move>, index: number) => {
    let items = [];
    for (let i = 0; i < columns; i++) {
      const item = d[index * columns + i];
      item && items.push(item);
    }
    return items;
  };

  const getItemCount = () => data.length;

  const keyExtractor = (item: any, index: number) =>
    item.move ? item.move.name.concat(index.toString()) : index;

  return (
    <VirtualizedList
      data={data}
      renderItem={renderItem}
      getItemCount={getItemCount}
      getItem={getItem}
      removeClippedSubviews={true}
      keyExtractor={keyExtractor}
      horizontal={false}
      style={styles.listStyle}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Moves;
