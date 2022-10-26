import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 350,
  },
  navigationTop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp('100%') - 32,
    marginHorizontal: 16,
    marginTop: 24,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp('100%') - 32,
    marginHorizontal: 16,
    marginTop: 48,
  },
  name: {
    fontSize: 28,
    color: colors.WHITE,
    textTransform: 'capitalize',
  },
  typeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp('100%') - 32,
    marginHorizontal: 16,
    marginTop: 24,
  },
  types: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  type: {
    backgroundColor: colors.TYPE_BACKGROUND,
    borderRadius: 12,
    height: 24,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  typeName: {
    textTransform: 'capitalize',
    fontSize: 12,
    color: colors.WHITE,
  },
  seed: {
    textTransform: 'capitalize',
    fontSize: 16,
    color: colors.WHITE,
  },
  imageWrapper: {
    width: 120,
    height: 120,
    backgroundColor: colors.TYPE_BACKGROUND,
    alignSelf: 'center',
    position: 'absolute',
    bottom: -20,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  image: {
    minHeight: 150,
    minWidth: 150,
    marginTop: -30,
    zIndex: 100,
  },
  details: {
    backgroundColor: 'transparent',
    overflow: 'visible',
    marginTop: -20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: hp('100%'),
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    width: wp('100%') - 32,
    marginHorizontal: 16,
    justifyContent: 'space-between',
  },
  tab: {
    height: 40,
    width: (wp('100%') - 32) / 4,
    borderBottomColor: colors.GREY,
    borderBottomWidth: 2,
    alignItems: 'center',
  },
  tabActive: {
    height: 40,
    borderBottomColor: colors.PURPLE,
    borderBottomWidth: 2,
    width: (wp('100%') - 32) / 4,
    alignItems: 'center',
  },
  tabText: {
    color: colors.BLACK,
    opacity: 0.5,
  },
  tabTextActive: {
    color: colors.BLACK,
    opacity: 1,
  },
  statContainer: {
    width: wp('100%') - 32,
    marginHorizontal: 16,
    marginTop: 24,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statText: {
    color: colors.BLACK,
    opacity: 0.5,
    fontSize: 16,
    textTransform: 'capitalize',
    maxWidth: 150,
  },
  baseStat: {
    color: colors.BLACK,
    opacity: 1,
    fontSize: 16,
    position: 'absolute',
    left: wp('50%') - 32,
  },
  measures: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  movesContainer: {
    width: wp('100%') - 32,
    marginHorizontal: 16,
    marginTop: 24,
    minHeight: '100%',
    flex: 1,
  },
  aboutContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  aboutText: {
    fontSize: 20,
    textTransform: 'capitalize',
    color: colors.BLACK,
  },
});

export default styles;
