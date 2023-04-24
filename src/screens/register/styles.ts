import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 40,
    justifyContent: 'space-between',
  },
  register: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    color: colors.BLACK,
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    lineHeight: 24,
  },
  subtitle: {
    color: colors.BLACK,
    fontSize: 16,
    lineHeight: 20,
  },
  input: {
    height: 40,
    color: colors.BLACK,
    width: wp('100%') - 32,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.LIGHT_GREY,
    borderRadius: 10,
    marginBottom: 20,
  },
  inputError: {
    height: 40,
    color: colors.BLACK,
    width: wp('100%') - 32,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.LIGHT_GREY,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: 'red',
    borderWidth: 1,
  },
  backLogin: {
    marginTop: 10,
  },
  backLoginText: {
    color: colors.BLACK,
    fontSize: 16,
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginBottom: 8,
  },
});

export default styles;
