import React, {Component} from 'react';
import {View,Text, Stylesheet} from 'react-native';
import {Icon} from 'native-base';

class AddMediaTab extends Component{
    static navigationOptions ={
        tabBarIcon: ({ tintColor})=>(
            <Icon name = 'ios-add-circle' style ={{color:tintColor}}/>
        )
    }
    
    render(){
        return (
          <View style ={style.container}>
              <Text>AddMedia tab</Text>
          </View>      
        );
    }

}
export default AddMediaTab;

const style = Stylesheet.create({
    container:{
        flex :1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})