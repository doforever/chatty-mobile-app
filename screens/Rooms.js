import { StyleSheet, View, Button, Text } from 'react-native';
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

export default function Rooms({navigation}) {
  const { loading, error, data } = useQuery(USER_ROOMS);

  if(data) console.log('Data', data);

  if (loading) return <View><Text>Loading...</Text></View>;
  if (error) return <View><Text>Error :-(</Text></View>;

  return (
    <View style={styles.container}>
      <Button 
        title='Chat'
        onPress={() => navigation.navigate('Chat', { title: 'Chat name'})}
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
});