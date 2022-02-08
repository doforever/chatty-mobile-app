import { StyleSheet, Text, Pressable } from 'react-native';
import { useQuery, gql } from "@apollo/client";

export default function RoomItem ({ room, onPress }) {
  const { name, id } = room;

  const ROOM = gql`
    query getUserRooms {
      room(id: ${toString(id)}) {
        name
        messages {
          insertedAt
          body
        }
      }
    }
  `;

  const { data } = useQuery(ROOM);

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