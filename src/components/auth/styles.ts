import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:200
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: colors.BLACK,
    fontSize: 16,
  },
  description: {
    marginTop: 10,
    color: colors.BLACK,
    fontSize: 14,
    textAlign: 'center',
  },
  loginWrapper: {
    marginTop: 20,
  },
  login: {
    color: colors.BLACK,
    fontSize: 20,
  },
});

export default styles;
