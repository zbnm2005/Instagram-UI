import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Icon } from 'native-base';
import {Ionicon} from '@expo/vector-icons'
import { createMaterialTopTabNavigator} from 'react-navigation-tabs';

import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

class MainScreen extends Component {
  
  static navigationOptions = {
    headerLeft : ()=><Icon name ='ios-camera' style ={{paddingLeft:10}}/>,
    title:'Instagram',
    headerRight : ()=><Icon name ='ios-send' style ={{paddingRight:10}}/>,
  }  

   render() {
    return (
      <AppTabNavigator/>
    );
  }
}
export default MainScreen;

 const AppTabNavigator = createMaterialTopTabNavigator({
  HomeTab:{
    screen:HomeTab
  },
  Search:{
    screen:SearchTab
  },
  AddMedia:{
    screen:AddMediaTab
  },
  Likes:{
    screen:LikesTab
  },
  Profile:{
    screen:ProfileTab
  }
},{
  animationEnabled: true;
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    styel : {
      ...Platform.select({
        android:{
          backgroundColor:'white'
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true,
  }
}
)

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});