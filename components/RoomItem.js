import { Text, Pressable, Image, View } from 'react-native';
import { useQuery } from "@apollo/client";
import { GET_MESSAGES } from '../gql/queries';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import styles from '../stylesheets/RoomItemStyles';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: 'a few seconds',
    m: "1 m",
    mm: "%d m",
    h: "1 h",
    hh: "%d h",
    d: "1 d",
    dd: "%d d",
    M: "1 m",
    MM: "%d m",
    y: "1 y",
    yy: "%d y"
  }
})


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
      <Image 
        source={{ uri: 'https://placeimg.com/40/40/people' }} 
        style={styles.avatar}
      />
      <View style={styles.textWrapper}>
        <Text 
          style={styles.title}
          numberOfLines={1}
          ellipsizeMode='tail'
        >{name}</Text>
        {data?.room.messages.length >= 1 
        && <Text 
          style={styles.text}
          numberOfLines={1}
          ellipsizeMode='tail'
        >{data?.room.messages[0].body}</Text>}
      </View>
      {data?.room.messages.length >= 1
        && <Text style={styles.time}>{howLong(data?.room.messages[0].insertedAt)}</Text>}
    </Pressable>
  )
}