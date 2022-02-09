import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';
import Typography from '../constants/Typography';

export default StyleSheet.create({
  inputToolbar: {
    backgroundColor: Colors.blue[300],
    borderTopLeftRadius: Sizes.radiusSmall,
    borderTopRightRadius: Sizes.radiusSmall,
    borderTopWidth: 0,
    height: 'auto',
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: Sizes.paddingBig,
    paddingRight: Sizes.paddingBig,
  },
  listView: { 
    backgroundColor: Colors.blue[100], 
    padding: Sizes.paddingSmall,
  },
  send: {
    width: 41, 
    height: 41,
  },
  input: { 
    backgroundColor: Colors.white, 
    borderTopLeftRadius: Sizes.radiusSmall,
    borderTopRightRadius: Sizes.radiusSmall,
    borderBottomLeftRadius: Sizes.radiusSmall,
    ...Typography.body,
    lineHeight: 23,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: Sizes.paddingSmall,
    paddingRight: Sizes.paddingSmall,
    marginTop: 0,
    marginBottom: 6,
    marginLeft: 0,
  },
  textLeft: {
    ...Typography.body,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  textRight: {
    ...Typography.body,
    color: Colors.white,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  bubbleLeft: {
    backgroundColor: Colors.white,
    padding: Sizes.paddingSmall,
    borderTopLeftRadius: Sizes.radiusSmall,
    borderBottomRightRadius: Sizes.radiusSmall,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: Sizes.radiusSmall,
    marginBottom: Sizes.paddingSmall - 2,
  },
  bubbleRight: {
    backgroundColor: Colors.plum[300],
    padding: Sizes.paddingSmall,
    borderTopLeftRadius: Sizes.radiusSmall,
    borderBottomRightRadius: Sizes.radiusSmall,
    borderBottomLeftRadius: Sizes.radiusSmall,
    borderBottomRightRadius: 0,
    marginBottom: Sizes.paddingSmall - 2,
  },
});