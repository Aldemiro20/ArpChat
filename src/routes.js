import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import splash from './splash';
import Login from './Screens/Login';
import Chat from './Screens/Chat/Chat';


const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>

      <Stack.Screen
          name="splash"
          component={splash}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />   
          <Stack.Screen
          name="Login"
          component={Login}
          options={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerShown: false,
            headerStyle: {
              backgroundColor: 'transparent',
            }
          }}
        />
         <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerShown: false,
            headerStyle: {
              backgroundColor: 'transparent',
            }
          }}
        />
       
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;