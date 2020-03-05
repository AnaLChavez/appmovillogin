/*Ana Laura Chávez Álvarez
TI02SM-18
*/
import React from 'react';
import { View, StyleSheet, Alert, TextInput, Button } from 'react-native';
import {Container,Text,Header,ActivityIndicator,Content,Card,CardItem,Body,Item,Label,Input,Icon} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Login({ navigation }) {
const [postText, setPostText] = React.useState('');
const [postText1, getPostText1] = React.useState('');

  return (
    <Container>
      <Header />
      <Content padder contentContainerStyle={misEstilos.content}>
        <Card>
          <CardItem header bordered>
            <Text style={misEstilos.textCenter}>Iniciar sesión</Text>
          </CardItem>
          <CardItem bordered>
            <Body style={misEstilos.body}>
              <Item inlineLabel>
                <Icon type="FontAwesome" name="user" />
                <Input placeholder="Nombre de usuario"
                 value={postText1}
                 onChangeText={getPostText1} 
                />
              </Item>
              <Item inlineLabel last>
                <Icon type="FontAwesome" name="lock"  />
                <Input placeholder="Contraseña" 
                 
                 value={postText}
                 onChangeText={setPostText}
                  />
              </Item>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Button
              onPress={() => navigation.navigate('Datos',{post1:postText1, post:postText})}
              style={misEstilos.boton}
              title="Ingresar" > 
            </Button>
          </CardItem>
          <Button
          title="Especies"
          onPress={() =>
            navigation.navigate('Especies', {
              
            })
          }
        /> 
        </Card>
       
        <Button
          title="Registrate"
          onPress={() =>
            navigation.navigate('Principal', {
              
            })
          }
        />
    
      </Content>
    </Container>
  );
}
const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
    width: '100%',
  },
  boton: {
    marginRight: '50%',
    backgroundColor: 'red',
  },
  body: {
    paddingVertical: 35,

    container: {
      flex: 1,
      backgroundColor: 'yellow',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

export default Login;
