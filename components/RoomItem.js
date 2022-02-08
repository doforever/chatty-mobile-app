import { StyleSheet, Text, Pressable } from 'react-native';

export default function RoomItem ({ room, onPress }) {
  const { name } = room;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text>{name}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});