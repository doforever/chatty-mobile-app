import { StyleSheet, Text, Pressable } from 'react-native';
import { useQuery } from "@apollo/client";
import { GET_MESSAGES } from '../gql/queries';
import dayjs from 'dayjs';

var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

export default function RoomItem ({ room, navigation }) {
  const { name, id } = room;
  const { data } = useQuery(GET_MESSAGES, {
    variables: { id },
    pollInterval: 10000,
  });

  const onPress = () => navigation.navigate('Chat', {
    id,
  });

  const howLong = (dateString) => {
    return dayjs(dateString, 'YYYY-MM-DD HH:mm:SS').fromNow();
  }; 

  return (
    <Pressable style={styles.container} onPress={onPress}>
      {data?.room.messages.length >= 1 && <Text>{howLong(data?.room.messages[0].insertedAt)}</Text>}
      <Text>{name}</Text>
      {data?.room.messages.length >= 1 && <Text>{data?.room.messages[0].body}</Text>}
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