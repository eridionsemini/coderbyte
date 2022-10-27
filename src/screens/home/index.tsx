import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useGetPokemonQuery} from '../../redux/pokemons/pokemonsSlice';
import {RootStackProps} from '../../navigators/types';
import {RootState, AppDispatch} from '../../redux';
import PokemonList from '../../components/lists/pokemon';
// @ts-ignore
import ArrowBackBlack from '../../assets/icons/arrow-back-black.svg';
// @ts-ignore
import List from '../../assets/icons/list.svg';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getCurrentUser} from '../../redux/user/userSlice';

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
