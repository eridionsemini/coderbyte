import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  outsideContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  container: {
    width: wp('100%') - 16,
    backgroundColor: 'white',
    paddingTop: 14,
    borderRadius: 30,
    flexDirection: 'column',
    marginBottom: 8,
    paddingHorizontal: 8,
    justifyContent: 'center',
    marginHorizontal: 8,
    paddingBottom: 20,
  },
  outTouch: {
    flex: 1,
    width: '100%',
  },
  close: {
    alignSelf: 'flex-end',
    height: 34,
    width: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    backgroundColor: colors.LIGHT_GREY,
  },
});

export default styles;
