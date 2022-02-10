import { View, Text, Image } from 'react-native';
import styles from '../stylesheets/ChatTitleStyles';

export default function ChatTitle({title}) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://placeimg.com/40/40/people' }}
        style={styles.avatar}
      />
      <View style={styles.textWrapper}>
        <Text 
          style={styles.title} 
          numberOfLines={1} 
          ellipsizeMode='tail'
        >{title}</Text>
        <Text style={styles.status}>Active now</Text>
      </View>
    </View>
  );
};