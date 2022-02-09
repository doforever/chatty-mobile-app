import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';
import Typography from '../constants/Typography';
import Fonts from '../constants/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    color: Colors.black,
    paddingTop: Sizes.paddingSmall,
    paddingBottom: Sizes.paddingSmall,
    paddingLeft: Sizes.paddingBig,
    paddingRight: Sizes.paddingBig,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: Sizes.radiusSmall,
    marginBottom: Sizes.paddingSmall,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: Sizes.paddingBig,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    ...Typography.title,
  },
  text: {
    ...Typography.body,
  },
  time: {
    alignSelf: 'flex-end',
    textAlign: 'right',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
    color: Colors.gray[500],
    fontFamily: Fonts[400],
  }
});