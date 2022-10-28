import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import Moves from '../../components/lists/moves';
import {useGetPokemonDetailsQuery} from '../../redux/detail/detailSlice';
import {addPokemonToWishes, deleteWish} from '../../redux/wish/wishSlice';
import {RootStackProps} from '../../navigators/types';
import {TabStatus, Type, Stat} from './types';
import {RootState, AppDispatch} from '../../redux';
import {
  determinePokemonColor,
  calculateTotalStats,
  determineIfPokemonIsInWishes,
} from '../../utils/utils';
import {colors} from '../../constants/colors';
import styles from './styles';

// @ts-ignore
import ArrowBackWhite from '../../assets/icons/arrow-back-white.svg';
// @ts-ignore
import HeartWhite from '../../assets/icons/heart-white.svg';

// @ts-ignore
import HeartRed from '../../assets/icons/heart-red.svg';

const hitSlop = {left: 30, right: 30, top: 20, bottom: 20};

const PokemonDetail = ({
  route: {
    params: {id},
  },
  navigation,
}: RootStackProps) => {
  const [tab, setTab] = useState<TabStatus>(TabStatus.ABOUT);
  const {data: pokemon, isFetching, isLoading} = useGetPokemonDetailsQuery(id);
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const {list} = useSelector((state: RootState) => state.wish);

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  const handleHeartPress = (pok: any) => {
    if (determineIfPokemonIsInWishes(list, pok.id)) {
      const wish = list.find((x: any) => x.pokemonId === pok.id);
      if (wish) {
        dispatch(deleteWish(wish.id));
      }
    }

    if (!determineIfPokemonIsInWishes(list, pok.id)) {
      const data = {
        pokemonId: pok.id,
        name: pok.name,
        types: pok.types,
        image: pok.sprites.other.home.front_default,
      };
      dispatch(addPokemonToWishes(data));
    }
  };

  if (isFetching || isLoading || !pokemon) {
    return null;
  }

  return (
    <SafeAreaView>
      <StatusBar hidden />
      <View
        style={[
          styles.header,
          {backgroundColor: determinePokemonColor(pokemon.types[0].type.name)},
        ]}>
        <View style={styles.navigationTop}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            hitSlop={hitSlop}>
            <ArrowBackWhite />
          </TouchableOpacity>
          <TouchableOpacity
            hitSlop={hitSlop}
            onPress={() => handleHeartPress(pokemon)}>
            {determineIfPokemonIsInWishes(list, pokemon.id) ? (
              <HeartRed />
            ) : (
              <HeartWhite />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{pokemon.name}</Text>
          <Text style={styles.name}># {id}</Text>
        </View>
        <View style={styles.typeContainer}>
          <View style={styles.types}>
            {pokemon.types.map((type: Type, key: number) => {
              return (
                <View key={key} style={styles.type}>
                  <Text style={styles.typeName}>{type.type.name}</Text>
                </View>
              );
            })}
          </View>
          <Text style={styles.seed}>Seed Pokemon</Text>
        </View>
        <View style={styles.imageWrapper}>
          <FastImage
            source={{uri: pokemon.sprites.other.home.front_default}}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            onPress={() => setTab(TabStatus.ABOUT)}
            style={tab === TabStatus.ABOUT ? styles.tabActive : styles.tab}>
            <Text
              style={
                tab === TabStatus.ABOUT ? styles.tabTextActive : styles.tabText
              }>
              About
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab(TabStatus.STATS)}
            style={tab === TabStatus.STATS ? styles.tabActive : styles.tab}>
            <Text
              style={
                tab === TabStatus.STATS ? styles.tabTextActive : styles.tabText
              }>
              Base Stats
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab(TabStatus.EVOLUTION)}
            style={tab === TabStatus.EVOLUTION ? styles.tabActive : styles.tab}>
            <Text
              style={
                tab === TabStatus.EVOLUTION
                  ? styles.tabTextActive
                  : styles.tabText
              }>
              Evolution
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab(TabStatus.MOVES)}
            style={tab === TabStatus.MOVES ? styles.tabActive : styles.tab}>
            <Text
              style={
                tab === TabStatus.MOVES ? styles.tabTextActive : styles.tabText
              }>
              Moves
            </Text>
          </TouchableOpacity>
        </View>
        {tab === TabStatus.ABOUT ? (
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutText}>{pokemon.name} about info</Text>
          </View>
        ) : null}
        {tab === TabStatus.STATS ? (
          <View style={styles.statContainer}>
            {pokemon.stats.map((stat: Stat, key: number) => {
              return (
                <View key={key} style={styles.stat}>
                  <Text
                    style={styles.statText}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {stat.stat.name}
                  </Text>
                  <Text style={styles.baseStat}>{stat.base_stat}</Text>
                  <View style={styles.measures}>
                    <View
                      style={{
                        width: stat.base_stat,
                        height: 5,
                        borderRadius: 5,
                        overflow: 'hidden',
                        zIndex: 10,
                        backgroundColor:
                          stat.base_stat >= 50 ? colors.grass : colors.fire,
                      }}
                    />
                    <View
                      style={{
                        width: 100 - stat.base_stat,
                        height: 5,
                        borderRadius: 5,
                        marginLeft: -5,
                        backgroundColor: colors.GREY,
                      }}
                    />
                  </View>
                </View>
              );
            })}
            <View style={styles.stat}>
              <Text
                style={styles.statText}
                numberOfLines={1}
                ellipsizeMode="tail">
                Total
              </Text>
              <Text style={styles.baseStat}>
                {calculateTotalStats(pokemon.stats)}
              </Text>
              <View style={styles.measures}>
                <View
                  style={{
                    width: 40,
                    height: 5,
                    borderRadius: 5,
                    overflow: 'hidden',
                    zIndex: 10,
                    backgroundColor: colors.grass,
                  }}
                />
                <View
                  style={{
                    width: 60,
                    height: 5,
                    borderRadius: 5,
                    marginLeft: -5,
                    backgroundColor: colors.GREY,
                  }}
                />
              </View>
            </View>
            <View>
              <Text />
            </View>
          </View>
        ) : null}
        {tab === TabStatus.EVOLUTION ? <View /> : null}
        {tab === TabStatus.MOVES ? (
          <Moves
            data={pokemon.moves}
            backgroundColor={determinePokemonColor(pokemon.types[0].type.name)}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default PokemonDetail;
