import { HeaderBackButton } from '@react-navigation/elements';
import { View, Text, Image } from 'react-native';
import caretIcon from '../assets/caret.png';
import styles from '../stylesheets/HeaderStyles';

export default function Header({navigation, options, route}) {
  const canGoBack = navigation.canGoBack();
  const ActionButtons = options.headerRight;
  const HeaderTitle = options.headerTitle 
    || (() => <Text style={styles.title}>{options.title || route.name}</Text>);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}> 
        <View style={styles.leftSide}>
          {canGoBack
            && <HeaderBackButton
              onPress={navigation.goBack}
              style={styles.goBackButton}
              backImage={() =>
                <Image
                  style={styles.backIcon}
                  source={caretIcon}
                  resizeMode='contain'
                />
              }
            />}
          <HeaderTitle/>
        </View>
        <ActionButtons/>
      </View>
    </View>
  );
};