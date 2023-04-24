import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 40,
    justifyContent: 'space-between',
  },
  infoContainer: {
    marginTop: 40,
  },
  welcome: {
    color: colors.BLACK,
    fontSize: 28,
    lineHeight: 32,
  },
  profileInfo: {
    color: colors.BLACK,
    fontSize: 20,
    lineHeight: 24,
  },
});

export default styles;
