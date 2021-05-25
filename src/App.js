import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './screens/splash';
import Home from './screens/Home';
import Comments from './screens/Comments';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({route, navigation}) => ({
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerTitleAlign:"center"
        })}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'POSTS',
          }}
        />

        <Stack.Screen
          name="Comments"
          component={Comments}
          options={{
            title: 'Comments',
            gestureEnabled: 'true',
            gestureDirection: 'vertical-inverted',
            
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
