import { Pressable, Image, View } from 'react-native';
import styles from '../stylesheets/IconButtonStyles';

export default function IconButton({icon, onPress}) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={icon}
          style={styles.icon}
          resizeMode='contain'
        />
      </View>
    </Pressable>
  );
};