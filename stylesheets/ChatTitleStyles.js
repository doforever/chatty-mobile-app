import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';
import Typography from '../constants/Typography';

export default StyleSheet.create({
  textWrapper: {
    flexShrink: 1,
    paddingLeft: Sizes.paddingSmall,
    paddingRight: Sizes.paddingSmall,
  },
  title: {
    ...Typography.h4,
    color: Colors.plum[500],
  },
  status: {
    ...Typography.body,
    color: Colors.white,
  },
  avatar: {
    width: Sizes.iconButton,
    height: Sizes.iconButton,
    borderRadius: Sizes.iconButton / 2,
  },
  container: {
    flexDirection: 'row',
    flexShrink: 1,
  }
});