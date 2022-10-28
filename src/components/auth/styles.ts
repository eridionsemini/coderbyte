import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
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
    backgroundColor: colors.BLACK,
    height: 40,
    width: 120,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    color: colors.WHITE,
    fontSize: 16,
    lineHeight: 20,
  },
});

export default styles;
