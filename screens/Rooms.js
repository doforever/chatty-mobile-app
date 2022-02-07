import { StyleSheet, Text, View, Button } from 'react-native';

export default function Rooms({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Rooms</Text>
      <Button 
        title='Go to Chat'
        onPress={() => navigation.navigate('Chat')}
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
