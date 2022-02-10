import { StyleSheet } from 'react-native';
import Sizes from '../constants/Sizes';

export default StyleSheet.create({ 
  headerHightContainer: { 
    flexDirection: 'row', 
    width: Sizes.iconButton * 2 + 8, 
    justifyContent: 'space-between',
  },
});