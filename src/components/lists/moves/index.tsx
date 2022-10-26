import React from 'react';
import {FlatList, View, Text, ScrollView} from 'react-native';
import {Move} from './types';
import styles from './styles';

const Moves: React.FC<{
  data: Array<Move>;
  backgroundColor: string;
}> = ({data, backgroundColor}) => {
  const renderItem = ({item}: any) => {
    return (
      <View
        key={item.move.id}
        style={[styles.moveContainer, {backgroundColor}]}>
        <Text style={styles.moveText}>{item.move.name}</Text>
      </View>
    );
  };
  const keyExtractor = (item: any, index: number) =>
    item.move ? item.move.name.concat(index.toString()) : index;

  const ListFooterComponent = () => {
    return <View style={styles.listFooter} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      removeClippedSubviews={true}
      keyExtractor={keyExtractor}
      ListFooterComponent={ListFooterComponent}
      contentContainerStyle={styles.contentContainerStyle}
      numColumns={3}
      horizontal={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Moves;
