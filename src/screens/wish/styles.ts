import {StyleSheet, Platform} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  listHeader: {
    marginBottom: 24,
    marginTop: 20,
  },
  mainHalfCircle: {
    width: '100%',
    height: wp('100%') / 2,
    borderBottomRightRadius: wp('100%') / 2,
    borderBottomLeftRadius: wp('100%') / 2,
    backgroundColor: colors.GREY,
    position: 'relative',
    overflow: 'hidden',
  },
  secondHalfCircle: {
    width: wp('100%') / 2,
    height: wp('100%') / 4,
    borderBottomRightRadius: wp('100%') / 4,
    borderBottomLeftRadius: wp('100%') / 4,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  thirdCircle: {
    width: wp('100%') / 4,
    height: wp('100%') / 8,
    borderBottomRightRadius: wp('100%') / 8,
    borderBottomLeftRadius: wp('100%') / 8,
    backgroundColor: colors.GREY,
    overflow: 'hidden',
  },
  textWrapper: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 24,
    color: colors.BLACK,
    textTransform: 'capitalize',
  },
  content: {
    fontSize: 16,
    color: colors.BLACK,
    width: wp('100%') - 32,
    position: 'absolute',
    zIndex: 20,
    top: 80,
    left: 20,
  },
  input: {
    width: wp('100%'),
    height: 48,
    backgroundColor: colors.DARK_GREY,
    zIndex: 99,
    color: colors.BLACK,
    paddingHorizontal: 12,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 0,
  },
  indicator: {
    paddingVertical: 15,
    backgroundColor: colors.WHITE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyList: {
    alignSelf: 'center',
    marginTop: 20,
    color: colors.BLACK,
  },
});

export default styles;
