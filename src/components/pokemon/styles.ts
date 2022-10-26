import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  card: {
    width: wp('50%') - 16,
    height: wp('50%') - 40,
    borderRadius: 20,
    marginBottom: 8,
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 8,
    marginHorizontal: 4,
    overflow: 'hidden',
  },
  imageWrapper: {
    alignSelf: 'flex-end',
    height: 110,
    width: 106,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 8,
    right: -8,
  },
  imageBackFirstPart: {
    height: 50,
    width: 106,
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    marginBottom: 5,
    opacity: 0.3,
    backgroundColor: colors.TYPE_BACKGROUND,
    overflow: 'hidden',
  },
  imageBackSecondPart: {
    height: 50,
    width: 106,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    marginTop: 5,
    opacity: 0.3,
    backgroundColor: colors.TYPE_BACKGROUND,
    overflow: 'hidden',
  },
  secondCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    position: 'absolute',
    opacity: 0.4,
    backgroundColor: colors.TYPE_BACKGROUND,
    overflow: 'hidden',
  },
  thirdCircle: {
    height: 40,
    width: 40,
    backgroundColor: colors.TYPE_BACKGROUND,
    opacity: 0.5,
    borderRadius: 20,
    position: 'absolute',
    overflow: 'hidden',
  },
  image: {
    height: 80,
    width: 80,
    position: 'absolute',
  },
  typeContainer: {
    backgroundColor: colors.TYPE_BACKGROUND,
    borderRadius: 12,
    height: 24,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    textTransform: 'capitalize',
    color: colors.WHITE,
    marginBottom: 12,
    marginTop: 24,
  },
  typeContainerText: {
    fontSize: 12,
    textTransform: 'capitalize',
    color: colors.WHITE,
  },
});

export default styles;
