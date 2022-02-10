import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';
import Typography from '../constants/Typography';

export default StyleSheet.create({ 
  headerHightContainer: { 
    flexDirection: 'row', 
    width: Sizes.iconButton * 2 + 8, 
    justifyContent: 'space-between' 
  },
  headerRooms: { 
    ...Typography.h2, 
    color: Colors.plum[500],
  },
});