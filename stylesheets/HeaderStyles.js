import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';
import Typography from '../constants/Typography';

export default StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    backgroundColor: Colors.blue[100],
  },
  innerContainer: {
    flexDirection: 'row',
    padding: Sizes.paddingBig,
    borderBottomRightRadius: Sizes.radiusBig,
    borderBottomLeftRadius: Sizes.radiusBig,
    height: '100%',
    backgroundColor: Colors.blue[300],
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  leftSide: {
    flexDirection: 'row',
    flexShrink: 1,
  },
  title: {
    ...Typography.h2,
    color: Colors.plum[500],
  },
  goBackButton: {
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 0,
  },
  backIcon: {
    width: 16,
    height: 16,
  }
});