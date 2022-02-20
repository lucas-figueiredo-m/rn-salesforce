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
import { TabBar } from './components/TabBar'
import { Colors } from 'theme'
import useTranslation from 'hooks/useTranslation'

const Tab = createBottomTabNavigator<TabParams>()

// https://www.youtube.com/watch?v=bNuwwkgRQOk
// https://reactnavigation.org/docs/bottom-tab-navigator#tabbar

export const TabNavigator: React.FC = () => {
  const t = useTranslation()
  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false,
        tabBarActiveTintColor: Colors.Flame
      }}
      tabBar={(props) => <TabBar { ...props} />}
    >
      <Tab.Screen
        name={TabRoutes.Home}
        component={HomeScreen}
        options={{
          tabBarLabel: t('tabNames.home'),
          tabBarIcon: ({ color }) => <SVG xml={Home} color={color} />
        }}
      />
      <Tab.Screen
        name={TabRoutes.Clients}
        component={ClientsScreen}
        options={{
          tabBarLabel: t('tabNames.clients'),
          tabBarIcon: ({ color }) => <SVG xml={People} color={color} />
        }}
      />
      <Tab.Screen
        name={TabRoutes.Orders}
        component={OrdersScreen}
        options={{
          tabBarLabel: t('tabNames.orders'),
          tabBarIcon: ({ color }) => <SVG xml={Document} color={color} />
        }}
      />
      <Tab.Screen
        name={TabRoutes.Menu}
        component={MenuScreen}
        options={{
          tabBarLabel: t('tabNames.menu'),
          tabBarIcon: ({ color }) => <SVG xml={Menu} color={color} />
        }}
      />
    </Tab.Navigator>
  )
}