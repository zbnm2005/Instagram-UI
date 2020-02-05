import React, {Component} from 'react';
import {View,Text, Stylesheet} from 'react-native';
import {Icon} from 'native-base';


class ProfileTab extends Component{
    static navigationOptions ={
        tabBarIcon: ({ tintColor})=>(
            <Icon name = 'ios-person' style ={{color:tintColor}}/>
        )
    }
    
    render(){
        return (
          <View style ={style.container}>
              <Text>Profile tab</Text>
          </View>      
        );
    }
}
export default ProfileTab;

const style = Stylesheet.create({
    container:{
        flex :1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})