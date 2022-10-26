import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  register: {
    alignItems: 'center',
  },
  title: {
    color: colors.BLACK,
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    color: colors.BLACK,
    width: wp('100%') - 32,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    backgroundColor: colors.GREY,
    borderRadius: 20,
    marginBottom: 20,
  },
  registerButton: {
    height: 40,
    width: wp('100%') - 128,
    marginHorizontal: 64,
    borderRadius: 20,
    backgroundColor: colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  registerButtonText: {
    fontSize: 16,
    color: colors.WHITE,
    textTransform: 'capitalize',
  },
  registerButtonDisabled: {
    height: 40,
    width: wp('100%') - 128,
    marginHorizontal: 64,
    borderRadius: 20,
    backgroundColor: colors.GREY,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  registerButtonTextDisabled: {
    fontSize: 16,
    color: colors.BLACK,
    textTransform: 'capitalize',
  },
  backLogin: {
    marginTop: 20,
  },
  backLoginText: {
    color: colors.BLACK,
    fontSize: 16,
  },
});

export default styles;
