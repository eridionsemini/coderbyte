import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  pokemonContainer: {
    width: wp('100%') - 16,
    marginHorizontal: 8,
    height: 140,
    borderRadius: 20,
    marginBottom: 8,
    padding: 16,
  },
  id: {
    opacity: 0.7,
  },
  name: {
    fontSize: 28,
    textTransform: 'capitalize',
    color: colors.WHITE,
    marginBottom: 12,
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
    marginRight: 8,
  },
  typeText: {
    fontSize: 12,
    textTransform: 'capitalize',
    color: colors.WHITE,
  },
  imageWrapper: {
    position: 'absolute',
    right: 0,
    height: 140,
    width: 140,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  halfCircleTop: {
    height: 70,
    width: 140,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    backgroundColor: colors.TYPE_BACKGROUND,
    marginBottom: 5,
    overflow: 'hidden',
  },
  halfCircleBottom: {
    height: 70,
    width: 140,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    backgroundColor: colors.TYPE_BACKGROUND,
    marginTop: 5,
    overflow: 'hidden',
  },
  innerCircle: {
    width: 90,
    height: 90,
    borderRadius: 50,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    position: 'absolute',
    zIndex: 100,
    right: 10,
    bottom: 30,
  },
  heart: {
    position: 'absolute',
    top: 7,
    right: 7,
    zIndex: 500,
  },
});

export default styles;
