import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  tabItem: {
    display: 'flex',
    alignItems: 'center',
    width: wp('33%'),
  },
  tabItemText: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.BLACK,
    letterSpacing: -0.2,
    textTransform: 'capitalize',
  },
  tabItemTextFocused: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.PURPLE,
    letterSpacing: -0.2,
    textTransform: 'capitalize',
  },
});

export default styles;
