import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  navigationBar: {
    width: wp('100%') - 16,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,
    flexDirection: 'row',
  },
  confirmButton: {
    backgroundColor: colors.BLACK,
    paddingHorizontal: 16,
    height: 28,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: colors.LIGHT_GREY,
    paddingHorizontal: 16,
    height: 28,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmText: {
    color: colors.WHITE,
    fontSize: 14,
    fontWeight: '700',
  },
  confirmTextDisabled: {
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: '700',
  },
  inputWrapper: {
    marginTop: 50,
    alignItems: 'center',
  },
  input: {
    width: wp('100%') - 32,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    height: 40,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.LIGHT_GREY,
    borderRadius: 20,
    marginBottom: 20,
  },
  label: {
    color: colors.BLACK,
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 32,
  },
  inputError: {
    width: wp('100%') - 32,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    height: 40,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 20,
    marginBottom: 20,
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginBottom: 8,
  },
});

export default styles;
