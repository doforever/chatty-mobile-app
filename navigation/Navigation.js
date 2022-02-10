import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/Colors';
import Rooms from '../screens/Rooms';
import Chat from '../screens/Chat';
import IconButton from '../components/IconButton';
import searchIcon from '../assets/search.png';
import usersIcon from '../assets/users.png';
import callIcon from '../assets/call.png';
import videoCallIcon from '../assets/videocall.png';
import styles from '../stylesheets/NavigationStyles';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Rooms'
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.blue[300],
          },
          headerTintColor: Colors.plum[500],
          headerTitleStyle: {
            fontWeight: '700',
          },
        }}
      >
        <Stack.Screen
          name='Rooms'
          component={Rooms}
          options={{
            headerTitle: (props) => (<Text {...props} style={styles.headerRooms}></Text>),
            headerRight: () => (
              <View style={styles.headerHightContainer}>
                <IconButton
                  onPress={() => console.log('button press')}
                  icon={searchIcon}
                />
                <IconButton
                  onPress={() => console.log('button press')}
                  icon={usersIcon}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen 
          name='Chat'
          component={Chat}
          options={({ route }) => ({ 
            title: route.params.title, 
            name: route.params.title,
            headerRight: () => (
              <View style={styles.headerHightContainer}>
                <IconButton
                  onPress={() => console.log('button press')}
                  icon={callIcon}
                />
                <IconButton
                  onPress={() => console.log('button press')}
                  icon={videoCallIcon}
                />
              </View>
            ) 
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};