import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {RootStackProps} from '../../navigators/types';
import {RootState, AppDispatch} from '../../redux';
import {getUserWishes} from '../../redux/wish/wishSlice';
import Auth from '../../components/auth';
import WishList from '../../components/lists/wish';
import styles from './styles';
import {colors} from '../../constants/colors';

const Wish: React.FC<{
  navigation: RootStackProps['navigation'];
}> = ({navigation}) => {
  const [value, setValue] = useState<string>('');
  const {loading, list} = useSelector((state: RootState) => state.wish);
  const {user} = useSelector((state: RootState) => state.user);
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const focused = useIsFocused();

  useEffect(() => {
    if (focused && !loading && user && list.length === 0) {
      dispatch(getUserWishes({name: ''}));
    }
  }, [focused]);

  const handleChange = (text: string) => {
    setValue(text);
    dispatch(getUserWishes({name: text}));
  };

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
      </View>
    );
  };
  const ListEmptyComponent = () => {
    return (
      <View style={styles.emptyList}>
        <Text>No Pokemon added</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      {!user ? (
        <Auth
          title="Seems that you are logged out"
          description="Please login or register to see or add pokemon to wishes"
        />
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholderTextColor={colors.BLACK}
            value={value}
            underlineColorAndroid="transparent"
            placeholder="What Pokémon are you looking for?"
            onChangeText={handleChange}
          />
          <WishList
            data={list}
            navigation={navigation}
            ListEmptyComponent={ListEmptyComponent}
            ListHeaderComponent={ListHeaderComponent}
          />
          {loading ? (
            <View style={styles.indicator}>
              <ActivityIndicator color={colors.PURPLE} size="small" />
            </View>
          ) : null}
        </>
      )}
    </SafeAreaView>
  );
};

export default Wish;
