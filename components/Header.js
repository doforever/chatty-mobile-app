import { Header as RNNHeader, getHeaderTitle, HeaderBackButton } from '@react-navigation/elements';
import { View, StyleSheet, Text, Image } from 'react-native';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';
import Typography from '../constants/Typography';
import caretIcon from '../assets/caret.png';

export default function Header(props) {
  console.log(props);
  const canGoBack = props.navigation.canGoBack();
  const ActionButtons = props.options.headerRight;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}> 
        <View style={styles.leftSide}>
          {canGoBack
            && <HeaderBackButton
              onPress={props.navigation.goBack}
              style={styles.goBackButton}
              backImage={() =>
                <Image
                  style={styles.backIcon}
                  source={caretIcon}
                  resizeMode='contain'
                />
              }
            />}
          <Text style={styles.title}>{props.options.title || props.route.name}</Text>
        </View>
        <ActionButtons style={styles.actionButtons}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  title: {
    ...Typography.h2,
    color: Colors.plum[500],
  },
  goBackButton: {
    justifyContent: 'flex-start',
    marginLeft: 0,
  },
  backIcon: {
    width: 16,
    height: 16,
  }
});