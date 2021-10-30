import React, {useState} from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './store';
import BookDetail from './Components/BookDetail';
import Tabs from './navigation/Tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <>
            <Stack.Navigator>
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Detail"
                component={BookDetail}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
