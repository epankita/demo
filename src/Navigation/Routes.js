import React, { useEffect,useState } from 'react';
import { LogBox } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import MainStack from './MainStack'

 LogBox.ignoreAllLogs();
 const Stack = createStackNavigator();
export default function Routes() {

  return (
    <NavigationContainer >
       {MainStack()}
    </NavigationContainer>
    
  );
}

