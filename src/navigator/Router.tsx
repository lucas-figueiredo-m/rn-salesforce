import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { rootNavigationRef } from 'hooks/useRootNavigator'
import React from 'react'
import { AddClientScreen } from 'screens/AddClientScreen/AddClientScreen'
import { AddOrderScreen } from 'screens/AddOrderScreen/AddOrderScreen'
import { modalOptions } from './config'
import { MainRoutes, MainStackParams, ModalRoutes } from './RouterTypes'
import { TabNavigator } from './TabNavigator/TabNavigator'

const Stack = createStackNavigator<MainStackParams>()

const Router: React.FC = () => {
  return (
    <NavigationContainer ref={rootNavigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={MainRoutes.Tabs} component={TabNavigator} />

        {/** // TODO: add a navigator instead of a group to handle in-modal navigation */}
        <Stack.Group screenOptions={modalOptions}>
          <Stack.Screen name={ModalRoutes.AddClient} component={AddClientScreen} />
          <Stack.Screen name={ModalRoutes.AddOrder} component={AddOrderScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
