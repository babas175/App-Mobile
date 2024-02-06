import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './component/login';  // Certifique-se de corrigir o caminho correto
import buscarUser from './component/buscarUser';  
import profil from './component/profil';  

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="buscarUser" component={buscarUser} />
        <Stack.Screen name="profil" component={profil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
