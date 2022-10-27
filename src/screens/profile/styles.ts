import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  profileContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    position: 'absolute',
    fontSize: 32,
    letterSpacing: -0.4,
    color: colors.WHITE,
    textTransform: 'uppercase',
    lineHeight: 40,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 20,
    lineHeight: 24,
    color: colors.BLACK,
    textTransform: 'capitalize',
    marginTop: 20,
  },
  actions: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp('50%'),
  },
  editButton: {
    backgroundColor: colors.BLACK,
    height: 40,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    minWidth: 80,
  },
  editText: {
    color: colors.WHITE,
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: colors.WHITE,
    height: 40,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: colors.LIGHT_GREY,
    borderWidth: 1,
    minWidth: 80,
  },
  logoutText: {
    color: colors.BLACK,
    fontSize: 16,
  },
});

export default styles;
