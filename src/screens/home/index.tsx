import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, View, Text, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';
import {useIsFocused} from '@react-navigation/native';
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
  const [offset, setOffset] = useState<number>(0);
  const limit = 20;
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const {user} = useSelector((state: RootState) => state.user);
  const focused = useIsFocused();
  const dataRef = useRef({
    value: [],
  });

  const {data, isError, isFetching, isLoading, isSuccess} = useGetPokemonQuery({
    offset,
    limit,
    pokemonData: dataRef.current.value,
  });

  useEffect(() => {
    (async function getToken() {
      const token = await AsyncStorage.getItem('token');
      if (token && !user) {
        dispatch(getCurrentUser({}));
        dispatch(getUserWishes({name: ''}));
      }
    })();
  }, []);

  useEffect(() => {
    if (isSuccess && focused) {
      // @ts-ignore
      dataRef.current.value = data;
    }
  }, [isSuccess]);

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
    if (!isLoading && !isFetching && !isError && focused) {
      setOffset(offset + limit);
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
          ListHeaderComponent={
            isFetching || isLoading ? () => null : ListHeaderComponent
          }
        />
        {isLoading || isFetching ? (
          <View>
            <ActivityIndicator color={colors.PURPLE} size="small" />
          </View>
        ) : null}

        {isFetching || isLoading ? null : (
          <View style={styles.endIcon}>
            <FastImage
              source={require('../../assets/images/filter.png')}
              style={styles.image}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
