import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useGetPokemonQuery} from '../../redux/pokemons/pokemonsSlice';
import {RootStackProps} from '../../navigators/types';
import PokemonList from '../../components/lists/pokemon';
// @ts-ignore
import ArrowBackBlack from '../../assets/icons/arrow-back-black.svg';
// @ts-ignore
import List from '../../assets/icons/list.svg';
import styles from './styles';

const Home: React.FC<{
  navigation: RootStackProps['navigation'];
}> = ({navigation}) => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const req = {
    offset,
    limit,
  };

  const {data, isError, isFetching, isLoading} = useGetPokemonQuery(req);

  const ListHeaderComponent = () => {
    return (
      <View style={styles.headerWrapper}>
        <View style={styles.arrow}>
          <ArrowBackBlack />
          <Text style={styles.title}>Pokedex</Text>
        </View>
        <View style={styles.headerList}>
          <View style={styles.firstHalfCircle} />
          <View style={styles.secondHalfCircle} />
          <View style={styles.whiteCircle}>
            <View style={styles.innerCircle}>
              <List />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        {!isError && !isFetching && !isLoading ? (
          <PokemonList
            data={data}
            columns={2}
            navigation={navigation}
            ListHeaderComponent={ListHeaderComponent}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Home;
