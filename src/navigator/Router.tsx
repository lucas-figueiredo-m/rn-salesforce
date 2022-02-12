import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { MainRoutes, MainStackParams } from './RouterTypes'
import { TabNavigator } from './TabNavigator/TabNavigator'

const Stack = createStackNavigator<MainStackParams>()

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={MainRoutes.Tabs} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router