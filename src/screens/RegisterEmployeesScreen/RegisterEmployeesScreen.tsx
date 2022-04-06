import { useNavigation } from '@react-navigation/native'

import Container from 'components/Container/Container'
import Header from 'components/Header/Header'
import { ClientNavigationProp, ClientRoutes } from 'navigator/NewClientStack/NewClientTypes'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: Colors.White,
    height: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 15
  }
})

export const RegisterEmployeesScreen: React.FC = () => {
  const { goBack } = useNavigation<ClientNavigationProp<ClientRoutes.Employees>>()
  return (
    <Container.Modal>
      <View style={styles.root}>
        <Header.Modal onLeftPress={goBack} label='screens.registerEmployees.title' />
      </View>
    </Container.Modal>
  )
}
