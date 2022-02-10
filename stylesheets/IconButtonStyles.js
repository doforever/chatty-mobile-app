import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

export default StyleSheet.create({ 
  container: {
    backgroundColor: Colors.white,
    width: Sizes.iconButton,
    height: Sizes.iconButton,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Sizes.iconButton / 2,
  },
  icon: {
    width: 24,
    height: 24,
  }
});