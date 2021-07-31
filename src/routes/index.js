import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Services from '../services';
import ShoppingCart from '../screen/cart/shoppingCart'
import { cors } from '../style';
const Tab = createBottomTabNavigator();

export default function Router() {
  return <NavigationContainer>
    <Tab.Navigator
    tabBarOptions={
      {
        activeTintColor: cors.roxo,
        inactiveTintColor: cors.claro,
        activeBackgroundColor:cors.roxo,
        inactiveBackgroundColor:cors.laranja,
        style: {
          height: 70
        },
        labelStyle: {
          width: '100%',
          flex: 1,
          fontWeight: 'bold',
          fontSize: 16,
          lineHeight: 21,
          marginTop: 3,
          paddingTop: 21,
          backgroundColor: cors.laranja
        },
        keyboardHidesTabBar: true
      }
    }
    >
      <Tab.Screen name="Services" component = {Services} />
      <Tab.Screen name="ShoppingCart" component = {ShoppingCart} />
    </Tab.Navigator>
  </NavigationContainer>
}