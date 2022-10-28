import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: wp('100%') - 16,
    marginHorizontal: 8,
    alignItems: 'center',
    position: 'relative',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 108,
    position: 'relative',
  },
  arrow: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  title: {
    fontSize: 24,
    color: colors.BLACK,
    marginTop: 10,
  },
  headerList: {
    position: 'absolute',
    right: -45,
    height: 150,
    width: 150,
    bottom: -30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: -4,
  },
  firstHalfCircle: {
    height: 70,
    width: 150,
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    backgroundColor: colors.GREY,
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
  },
  secondHalfCircle: {
    height: 70,
    width: 150,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    backgroundColor: colors.GREY,
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
  },
  innerCircle: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    backgroundColor: colors.GREY,
  },
  whiteCircle: {
    height: 90,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
    backgroundColor: colors.WHITE,
  },
  endIcon: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    zIndex: 999,
    backgroundColor: colors.PURPLE,
  },
  image: {
    height: 24,
    width: 24,
  },
});

export default styles;
