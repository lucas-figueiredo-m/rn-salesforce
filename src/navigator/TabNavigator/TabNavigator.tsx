import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SVG } from 'components'
import React from 'react'
import ClientsScreen from 'screens/ClientsScreen/ClientsScreen'
import HomeScreen from 'screens/HomeScreen/HomeScreen'
import MenuScreen from 'screens/MenuScreen/MenuScreen'
import OrdersScreen from 'screens/OrdersScreen/OrdersScreen'
import { TabParams, TabRoutes } from './TabTypes'

import Home from 'assets/icons/home.svg'
import People from 'assets/icons/people.svg'
import Document from 'assets/icons/document.svg'
import Menu from 'assets/icons/menu.svg'

const Tab = createBottomTabNavigator<TabParams>()

// https://www.youtube.com/watch?v=bNuwwkgRQOk
// https://reactnavigation.org/docs/bottom-tab-navigator#tabbar

export const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'orange'
      }}
    >
      <Tab.Screen
        name={TabRoutes.Home}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <SVG xml={Home} color={color} />
        }}
      />
      <Tab.Screen
        name={TabRoutes.Clients}
        component={ClientsScreen}
        options={{
          tabBarLabel: 'Clients',
          tabBarIcon: ({ color }) => <SVG xml={People} color={color} />
        }}
      />
      <Tab.Screen
        name={TabRoutes.Orders}
        component={OrdersScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color }) => <SVG xml={Document} color={color} />
        }}
      />
      <Tab.Screen
        name={TabRoutes.Menu}
        component={MenuScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => <SVG xml={Menu} color={color} />
        }}
      />
    </Tab.Navigator>
  )
}