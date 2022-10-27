import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGetPokemonQuery} from '../../redux/pokemons/pokemonsSlice';
import {getCurrentUser} from '../../redux/user/userSlice';
import {getUserWishes} from '../../redux/wish/wishSlice';
import {RootStackProps} from '../../navigators/types';
import {RootState, AppDispatch} from '../../redux';
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
  const [pokemonData, setPokemonData] = useState([]);

  const req = {
    offset,
    limit,
    pokemonData,
  };
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const {user} = useSelector((state: RootState) => state.user);

  const {data, isError, isFetching, isLoading} = useGetPokemonQuery(req);

  useEffect(() => {
    (async function getToken() {
      const token = await AsyncStorage.getItem('token');
      if (token && !user) {
        dispatch(getCurrentUser({}));
        dispatch(getUserWishes({}));
      }
    })();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setOffset(offset + 20);
      setLimit(limit + 20);
    }, 5000);
  }, []);

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

  const loadMorePokemon = () => {
    if (!isLoading && !isFetching && !isError) {
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        {!isError && !isFetching && !isLoading ? (
          <PokemonList
            data={data}
            columns={2}
            loadMorePokemon={loadMorePokemon}
            navigation={navigation}
            ListHeaderComponent={ListHeaderComponent}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Home;
