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
import NewClient from 'assets/icons/user-add.svg'
import Document from 'assets/icons/document.svg'
import Menu from 'assets/icons/menu.svg'
import { TabBar } from './components/TabBar'
import { Colors } from 'theme'
import useTranslation from 'hooks/useTranslation'
import { Pressable, StyleSheet } from 'react-native'
import { defaultHitSlop } from 'constants/buttons'
import Label from 'components/Label/Label'
import useRootNavigator from 'hooks/useRootNavigator'
import { ModalRoutes } from 'navigator/RouterTypes'
import useTheme from 'hooks/useTheme'

const styles = StyleSheet.create({
  rightButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginLeft: 5,
    marginRight: 15
  }
})

const Tab = createBottomTabNavigator<TabParams>()

// https://www.youtube.com/watch?v=bNuwwkgRQOk
// https://reactnavigation.org/docs/bottom-tab-navigator#tabbar

export const TabNavigator: React.FC = () => {
  const t = useTranslation()
  const rootNavigator = useRootNavigator()
  const { Font } = useTheme()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.Flame
      }}
      tabBar={props => <TabBar {...props} />}
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
          headerTitle: t('tabNames.clients'),
          headerShown: true,
          headerRight: () => (
            <Pressable
              onPress={() => rootNavigator.navigate(ModalRoutes.AddClient)}
              hitSlop={defaultHitSlop}
              style={styles.rightButtonContainer}
            >
              <Label.H4 t='clients.new' style={[{ color: Colors.Flame }, Font.transform.uppercase]} />
              <SVG style={styles.icon} xml={NewClient} width={20} height={20} color={Colors.Flame} />
            </Pressable>
          ),
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
