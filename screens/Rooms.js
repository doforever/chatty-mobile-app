import { StyleSheet, View, Button } from 'react-native';

export default function Rooms({navigation}) {
  return (
    <View style={styles.container}>
      <Button 
        title='Go to Chat'
        onPress={() => navigation.navigate('Chat', {title: 'Widlarz'})}
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
