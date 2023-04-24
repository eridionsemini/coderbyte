import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: wp('100%') - 32,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: colors.WHITE,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  buttonDisabled: {
    height: 40,
    width: wp('100%') - 32,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: colors.LIGHT_GREY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextDisabled: {
    fontSize: 16,
    color: colors.BLACK,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default styles;
