import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/user/userSlice';
import {RootState, AppDispatch} from '../../redux';
import {ProfileStackProps} from '../../navigators/types';
import Auth from '../../components/auth';
import {getFirstLetter} from '../../utils/utils';
import styles from './styles';
import User from '../../assets/icons/user.svg';

const Profile: React.FC<{
  navigation: ProfileStackProps['navigation'];
}> = ({navigation}) => {
  const {user} = useSelector((state: RootState) => state.user);
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  const tryLogout = () => {
    dispatch(logout({}));
  };

  return (
    <SafeAreaView>
      {!user ? (
        <Auth
          title="Seems that you are logged out"
          description="Please login or register to enjoy the full features of the app"
        />
      ) : (
        <View style={styles.profileContainer}>
          <View style={styles.imageWrapper}>
            <User />
            <Text style={styles.name}>
              {getFirstLetter(user.firstname)} {getFirstLetter(user.lastname)}
            </Text>
          </View>
          <Text style={styles.userInfo}>
            {user.firstname} {user.lastname}
          </Text>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => navigation.navigate('userEdit')}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutButton} onPress={tryLogout}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Profile;
