import React from 'react';
import {VirtualizedList, View} from 'react-native';
import Pokemon from '../../../components/pokemon';
import {RootStackProps} from '../../../navigators/types';
import {PokemonTypes} from '../../pokemon/types';
import styles from './styles';

type Pokemon = {
  name: string;
  url: string;
  detail: {
    image: string;
    id: number;
    types: Array<PokemonTypes>;
  };
};

const PokemonList: React.FC<{
  data: Array<Pokemon>;
  columns: number;
  ListHeaderComponent: () => JSX.Element | null;
  loadMorePokemon: () => void;
  navigation: RootStackProps['navigation'];
}> = ({data, columns, navigation, ListHeaderComponent, loadMorePokemon}) => {
  const getItem = (d: Array<Pokemon>, index: number) => {
    let items = [];
    for (let i = 0; i < columns; i++) {
      const item = d[index * columns + i];
      item && items.push(item);
    }
    return items;
  };
  const keyExtractor = ([]: Array<Pokemon>, key: number) => key.toString();
  const getItemCount = () => data.length;
  const renderItem = ({item}: any) => <Item row={item} />;

  const Item = ({row}: any) => {
    const key = Math.random() * Math.random();
    return (
      <View key={key} style={styles.row}>
        {row.map((pokemon: Pokemon, idx: number) => {
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
      onEndReached={() => loadMorePokemon()}
      ListHeaderComponent={ListHeaderComponent}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default PokemonList;
