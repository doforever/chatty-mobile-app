import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/Colors';
import Rooms from '../screens/Rooms';
import Chat from '../screens/Chat';

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
            headerRight: () => (
              <Button
                onPress={() => console.log('button press')}
                title="Search"
              />
            ),
          }}
        />
        <Stack.Screen 
          name='Chat'
          component={Chat}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};