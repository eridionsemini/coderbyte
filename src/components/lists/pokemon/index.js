import React from 'react';
import {VirtualizedList, View} from 'react-native';
import Pokemon from '../../../components/pokemon';
import styles from './styles';

const PokemonList = ({
  data,
  columns,
  navigation,
  ListHeaderComponent,
  loadMorePokemon,
}) => {
  const getItem = (d, index) => {
    let items = [];
    for (let i = 0; i < columns; i++) {
      const item = d[index * columns + i];
      item && items.push(item);
    }
    return items;
  };
  const keyExtractor = ([item], key) => key.toString();
  const getItemCount = () => data.length;
  const renderItem = ({item}) => <Item row={item} />;

  const Item = ({row}) => {
    const key = Math.random() * Math.random().toString();
    return (
      <View key={key} style={styles.row}>
        {row.map((pokemon, idx) => {
          return (
            <Pokemon
              key={idx}
              navigation={navigation}
              name={pokemon.name}
              id={pokemon.detail.id}
              image={pokemon.detail.image}
              types={pokemon.detail.types}
            />
          );
        })}
      </View>
    );
  };

  return (
    <VirtualizedList
      getItem={getItem}
      keyExtractor={keyExtractor}
      getItemCount={getItemCount}
      data={data}
      onEndReachedThreshold={1}
      onEndReached={({distanceFromEnd}) => loadMorePokemon()}
      ListHeaderComponent={ListHeaderComponent}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default PokemonList;
