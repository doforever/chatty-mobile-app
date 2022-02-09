import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useQuery } from "@apollo/client";
import RoomItem from '../components/RoomItem';
import { USER_ROOMS } from '../gql/queries';

export default function Rooms({navigation}) {
  const { loading, error, data} = useQuery(USER_ROOMS);

  // if (data) console.log('Rooms ', data);

  if (loading) return <View><Text>Loading...</Text></View>;
  if (error) return <View><Text>Error :-(</Text></View>;

  return (
    <View style={styles.container}>
      <FlatList
        data={data.usersRooms.rooms}
        renderItem={({ item }) => (
          <RoomItem
            room={item}
            onPress={() => navigation.navigate('Chat', { 
              id: item.id 
            })}
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
  }
});