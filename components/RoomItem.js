import { StyleSheet, Text, Pressable, Image } from 'react-native';
import { useQuery } from "@apollo/client";
import { GET_MESSAGES } from '../gql/queries';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime);
dayjs.extend(utc);


export default function RoomItem ({ room, navigation, me }) {
  const { name, id } = room;
  const { data } = useQuery(GET_MESSAGES, {
    variables: { id },
    pollInterval: 10000,
  });

  const howLong = (dateString) => {
    return dayjs(dateString, 'YYYY-MM-DD HH:mm:SS').utc(true).fromNow();
  }; 

  const createTitle = (messages) => {
    if (!messages || !Array.isArray(messages)) return name;
    else {
      const interlocutor = messages.find(message => message.user.id !== me.id)?.user;
      return interlocutor ? `${interlocutor.firstName} ${interlocutor.lastName}` : name;
    }
  };

  const onPress = () => navigation.navigate('Chat', {
    id,
    title: createTitle(data.room.messages), 
  });

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{ uri: 'https://placeimg.com/40/40/people' }} style={{ width: 40, height: 40 }}/>
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