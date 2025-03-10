import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StyleSheetSpinner from './StyleSheetSpinner';
import StatusBarRefresh from './StatusBarRefresh';
import LoginScreen from './LoginScreen';
import TableReservation from './TableReservation';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Bai1" component={StyleSheetSpinner} />
        <Tab.Screen name="Bai2" component={StatusBarRefresh} />
        <Tab.Screen name="Bai3" component={LoginScreen} />
        <Tab.Screen name="Bai4" component={TableReservation} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}
//https://drive.google.com/file/d/1BmwOCcC-d42ewb4ONGUK-IcYXPB42kPE/view?usp=sharing link clip
