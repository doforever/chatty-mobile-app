import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rooms from '../screens/Rooms';
import Chat from '../screens/Chat';
import IconButton from '../components/IconButton';
import searchIcon from '../assets/search.png';
import usersIcon from '../assets/users.png';
import callIcon from '../assets/call.png';
import videoCallIcon from '../assets/videocall.png';
import caretIcon from '../assets/caret.png';
import styles from '../stylesheets/NavigationStyles';
import Header from '../components/Header';
import ChatTitle from '../components/ChatTitle';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Rooms'
        screenOptions={{
          headerBackImageSource: caretIcon,
          header: (props) => <Header {...props} />,
        }}
      >
        <Stack.Screen
          name='Rooms'
          component={Rooms}
          options={{
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
            headerTitle: () => <ChatTitle title={route.params.title} />,
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
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};