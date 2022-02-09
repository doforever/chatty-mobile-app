import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue[100],
    paddingTop: 3 * Sizes.paddingSmall,
    alignContent: 'stretch',
  }
});