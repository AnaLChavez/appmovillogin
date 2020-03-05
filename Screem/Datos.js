import React from 'react';
import { View, StyleSheet, Alert, TextInput, Button } from 'react-native';
import {Container,Text,Header,ActivityIndicator,Content,Card,CardItem,Body,Item,Label,Input,Icon} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Datos({navigation,route}) {
  const [post1, post] = React.useState('');


React.useEffect(() => {
    if (route.params?.post1 && route.params?.post){
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post1],[route.params?.post]);


  return (
    
    <View>
      <Text >Hola usuario: {route.params?.post1}</Text>
      <Text >Tu contraseña es: {route.params?.post}</Text>
    
    <CardItem footer bordered>
            <Button onPress={() => navigation.navigate('Indicador',{})}
            
              style={misEstilos.boton}
              title="Continuar" >
              
              
            </Button>
          </CardItem>

    </View>
      
  );
 
}
const misEstilos = StyleSheet.create({
  boton: {
    marginRight: '50%',
    backgroundColor: 'red',
  }
}
);



export default Datos;