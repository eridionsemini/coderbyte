import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  pickerArea: {
    width: wp('50%'),
    backgroundColor: colors.LIGHT_GREY,
    height: wp('50%') + 20,
    borderRadius: 16,
    justifyContent: 'center',
    marginBottom: 16,
  },
  pickText: {
    color: colors.BLACK,
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
  },
  avatar: {
    width: wp('50%'),
    height: wp('50%') + 20,
    borderRadius: 16,
    justifyContent: 'center',
    marginBottom: 16,
  },
});

export default styles;
