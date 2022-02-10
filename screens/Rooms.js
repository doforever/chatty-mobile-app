import { View, Text, FlatList } from 'react-native';
import { useQuery } from "@apollo/client";
import RoomItem from '../components/RoomItem';
import { USER_ROOMS, MY_ID } from '../gql/queries';
import styles from '../stylesheets/RoomsStyles';

export default function Rooms({navigation}) {
  const { loading, error, data} = useQuery(USER_ROOMS);
  const { data: myData } = useQuery(MY_ID);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :-(</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={data.usersRooms.rooms}
        renderItem={({ item }) => (
          <RoomItem
            room={item}
            me={myData?.user}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}