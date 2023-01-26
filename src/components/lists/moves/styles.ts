import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainerStyle: {
    alignItems: 'center',
    marginTop: 24,
  },
  listStyle: {
    height: '100%',
    flex: 1,
  },
  moveContainer: {
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('28%'),
    marginHorizontal: 4,
    marginBottom: 4,
  },
  moveText: {
    color: colors.WHITE,
    fontSize: 12,
    opacity: 1,
    textTransform: 'capitalize',
  },
  listFooter: {
    paddingBottom: 48,
  },
});

export default styles;
