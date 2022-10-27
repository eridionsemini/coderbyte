import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, ActivityIndicator} from 'react-native';
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
import {colors} from '../../constants/colors';

const Home: React.FC<{
  navigation: RootStackProps['navigation'];
}> = ({navigation}) => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  const req = {
    offset,
    limit,
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

  const ListEmptyComponent = () => {
    return (
      <View>
        <Text>No Pokemon yet</Text>
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
        <PokemonList
          data={data || []}
          columns={2}
          loadMorePokemon={loadMorePokemon}
          navigation={navigation}
          ListEmptyComponent={ListEmptyComponent}
          ListHeaderComponent={ListHeaderComponent}
        />
        {isLoading || isFetching ? (
          <View>
            <ActivityIndicator color={colors.PURPLE} size="small" />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Home;
