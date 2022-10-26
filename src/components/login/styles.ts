import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  login: {
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
    paddingHorizontal: 16,
    backgroundColor: colors.LIGHT_GREY,
    borderRadius: 20,
    marginBottom: 20,
  },
  loginButton: {
    height: 40,
    width: wp('100%') - 128,
    marginHorizontal: 64,
    borderRadius: 20,
    backgroundColor: colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  loginButtonText: {
    fontSize: 16,
    color: colors.WHITE,
    textTransform: 'capitalize',
  },
  loginButtonDisabled: {
    height: 40,
    width: wp('100%') - 128,
    marginHorizontal: 64,
    borderRadius: 20,
    backgroundColor: colors.LIGHT_GREY,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  loginButtonTextDisabled: {
    fontSize: 16,
    color: colors.BLACK,
    textTransform: 'capitalize',
  },
  createAccountLogin: {
    height: 40,
    width: wp('100%') - 128,
    marginHorizontal: 64,
    borderRadius: 20,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.BLACK,
    borderWidth: 1,
    marginTop: 10,
  },
  createAccountText: {
    color: colors.BLACK,
    fontSize: 16,
  },
});

export default styles;
