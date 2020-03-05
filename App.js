import React from 'react';
import { View, StyleSheet, Alert, TextInput, Button } from 'react-native';
import {Container,
  Text,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Item,
  Label,
  Input,
  Icon,
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Registro from './Screem/Registro';
import Login from './Screem/Login';
import Datos from './Screem/Datos';
import Indicador from './Screem/Indicador';
import Principal from './Screem/Principal';
import Especies from './Screem/Especies'
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Datos" component={Datos} />
        <Stack.Screen name="Indicador" component={Indicador} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Especies" component={Especies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
