import { StyleSheet, View, Button, Text, FlatList, Pressable } from 'react-native';
import {
  useQuery,
  gql
} from "@apollo/client";

const USER_ROOMS = gql`
query getUserRooms {
    usersRooms {
    rooms {
        id
        name
      }
    }
  }
`;

const RoomItem = ({ room, onPress }) => {
  const { name } = room;

  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Text>{name}</Text>
    </Pressable>
  )
}

export default function Rooms({navigation}) {
  const { loading, error, data} = useQuery(USER_ROOMS);

  if (loading) return <View><Text>Loading...</Text></View>;
  if (error) return <View><Text>Error :-(</Text></View>;

  return (
    <View style={styles.container}>
      <FlatList
        data={data.usersRooms.rooms}
        renderItem={({ item }) => (
          <RoomItem
            room={item}
            onPress={() => navigation.navigate('Chat', { title: item.name })}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {

  }
});