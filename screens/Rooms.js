import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useQuery } from "@apollo/client";
import RoomItem from '../components/RoomItem';
import { USER_ROOMS } from '../gql/queries';

export default function Rooms({navigation}) {
  const { loading, error, data} = useQuery(USER_ROOMS);

  // if (data) console.log('Rooms ', data);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :-(</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={data.usersRooms.rooms}
        renderItem={({ item }) => (
          <RoomItem
            room={item}
            navigation={navigation}
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