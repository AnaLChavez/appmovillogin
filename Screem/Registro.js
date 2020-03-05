/*Ana Laura Chávez Álvarez
TI02SM-18
Registro
*/
import React from 'react';
import {View, StyleSheet, Alert, TextInput} from 'react-native';
import { Container,Button,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function Registro({navigation,route}){

    return(
       <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter} >Ingresa tus datos</Text>
     
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                  <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input
                    placeholder="Nombre de usuario"
                    
                  />
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'MaterialCommunityIcons' name= 'email'></Icon>
                  <Input placeholder= 'Correo'
                  />
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'
                   />
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Confirmar contraseña'
                   />
                </Item>
              </Body>
            </CardItem>
             
              <Button 
                onPress={() =>navigation.navigate('Login',{})                 
              } title="Registrate"/>
            
          
          <Icon type= 'FontAwesome' name='twitter'></Icon>   
          <Icon type= 'FontAwesome' name='instagram'></Icon>
          
          </Card>
        
        </Content>
        
      </Container>
    );
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  body: {
    paddingVertical: 35,
    
  container: {
        flex: 1,
        backgroundColor: 'yellow',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
    }
  }

});



export default Registro;