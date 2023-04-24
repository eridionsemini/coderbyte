import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import Button from '../../components/button';
import {RootStackProps} from '../../navigators/types';
import {RootState} from '../../redux';
import styles from './styles';
import CommonStyles from '../../constants/styles';
import AvatarImage from '../../components/image';

const Login: React.FC<{navigation: RootStackProps['navigation']}> = ({
  navigation,
}) => {
  const {firstname, email, avatar, website} = useSelector(
    (state: RootState) => state.auth,
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[CommonStyles.alignCenter, styles.infoContainer]}>
        <Text style={[styles.welcome, CommonStyles.mb16]}>
          Hello {firstname}
        </Text>
        <Text>Your amazing portofolio has been successfully submitted.</Text>
        <Text style={CommonStyles.mb16}>
          The preview below is what the community will see.
        </Text>
        <AvatarImage avatar={avatar} selectImage={() => console.log('')} />
        <Text
          style={[CommonStyles.mt16, styles.profileInfo, CommonStyles.link]}>
          {website}
        </Text>
        <Text style={[CommonStyles.mt16, styles.profileInfo]}>{firstname}</Text>
        <Text style={[CommonStyles.mt16, styles.profileInfo]}>{email}</Text>
      </View>
      <Button
        title="login"
        disabled={false}
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};

export default Login;
