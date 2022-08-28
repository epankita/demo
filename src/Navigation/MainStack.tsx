import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import navigationStrings from "../constants/navigationStrings";
import { Home, countryList, wheather } from "../Screens";
import {RootStackParamList} from './RootStackPrams';

const Stack = createStackNavigator<RootStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }} >
      <Stack.Screen name='HOME' component={Home} options={{
       title:'Country List'
      }} />
      <Stack.Screen name='COUNTRYLIST' component={countryList}  />
      <Stack.Screen name='WHEATHER' component={wheather}  />


    </Stack.Navigator>
  );
}
