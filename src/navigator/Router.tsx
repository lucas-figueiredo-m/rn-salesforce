import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { rootNavigationRef } from 'hooks/useRootNavigator'
import React from 'react'
import { AddOrderScreen } from 'screens/AddOrderScreen/AddOrderScreen'
import { modalOptions } from './config'
import NewClientStack from './NewClientStack/NewClientStack'
import { MainRoutes, MainStackParams, ModalRoutes } from './RouterTypes'
import { TabNavigator } from './TabNavigator/TabNavigator'

const Stack = createStackNavigator<MainStackParams>()

const Router: React.FC = () => {
  return (
    <NavigationContainer ref={rootNavigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={MainRoutes.Tabs} component={TabNavigator} />

        {/** // TODO: add a navigator instead of a group to handle in-modal navigation */}
        <Stack.Screen name={ModalRoutes.AddClient} component={NewClientStack} options={modalOptions} />

        <Stack.Group screenOptions={modalOptions}>
          <Stack.Screen name={ModalRoutes.AddOrder} component={AddOrderScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
