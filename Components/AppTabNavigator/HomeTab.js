import React, {Component} from 'react';
import {View,Text, Stylesheet} from 'react-native';
import {Icon} from 'native-base';

class HomeTab extends Component{
    static navigationOptions ={
        tabBarIcon: ({ tintColor})=>(
            <Icon name = 'ios-home' style ={{color:tintColor}}/>
        )
    }
    
    render(){
        return (
          <View style ={style.container}>
              <Text>HomeTab</Text>
          </View>      
        );
    }

}
export default HomeTab;

const style = Stylesheet.create({
    container:{
        flex :1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})