import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//react-navigation 라이브러리에서 StackNavigator 추가하기
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import MainScreen from './Components/MainScreen';

export default class App extends React.Component {
  
  render(){
    return (
      <AppNav/>
    );
  }
}

// StackNavigator 를 App에 추가하기
const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainScreen // MainScreen 컴포넌트를 네비게이터에 등록
  }
})
const AppNav=createAppContainer(AppStackNavigator);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
