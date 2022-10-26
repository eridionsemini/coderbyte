import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootStackProps} from '../../navigators/types';
import WishList from '../../components/lists/wish';
import {RootState, AppDispatch} from '../../redux';
import {getUserWishes} from '../../redux/wish/wishSlice';
import styles from './styles';

const Wish: React.FC<{
  navigation: RootStackProps['navigation'];
}> = ({navigation}) => {
  const [value, setValue] = useState('');
  const {loading, list} = useSelector((state: RootState) => state.wish);
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!loading && list.length === 0) {
      dispatch(getUserWishes({}));
    }
  }, [navigation]);

  console.log('list',list);

  const ListHeaderComponent = () => {
    return (
      <View style={styles.listHeader}>
        <View style={styles.mainHalfCircle}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Pokedex</Text>
          </View>
          <View style={styles.secondHalfCircle}>
            <View style={styles.thirdCircle} />
          </View>
        </View>
        <Text style={styles.content}>
          Search for Pokémon by name or by using the National Pokédex number.
        </Text>
        <TextInput
          style={styles.input}
          defaultValue={value}
          placeholder="What Pokémon are you looking for?"
          onChangeText={text => setValue(text)}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      {!loading ? (
        <WishList
          data={list}
          navigation={navigation}
          ListHeaderComponent={ListHeaderComponent}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default Wish;
