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
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (wp('100%') / 300) * 96,
    height: (wp('100%') / 300) * 96,
    borderRadius: (wp('100%') / 300) * 48,
    backgroundColor: colors.WHITE,
    shadowColor: colors.PURPLE,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 20,
  },
  avatar: {
    width: (wp('100%') / 300) * 90,
    height: (wp('100%') / 300) * 90,
    borderRadius: (wp('100%') / 300) * 45,
  },
});

export default styles;
