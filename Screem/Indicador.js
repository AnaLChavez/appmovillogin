/*Ana Laura Chávez Álvarez
TI02SM-18
*/
import React, { Component } from 'react';
import { ActivityIndicator, CardItem ,View,Button ,Text, TouchableOpacity,Car,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
class Indicador extends Component {
   state = { animating: true }
    
   closeActivityIndicator = () => setTimeout(() => this.setState({
   animating: false }), 2000)
   
   componentDidMount = () => this.closeActivityIndicator()
   render() {
      const animating = this.state.animating
      return (
        <View style = {styles.container}>
        
         
            <ActivityIndicator
               animating = {animating}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/>
              
         </View>
         
      
      ) 
   }
}
export default Indicador


const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
   },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
})