import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { StyleSheet, View } from 'react-native'
import { Colors } from 'theme'
import Container from 'components/Container/Container'

import Header from 'components/Header/Header'
import { Input } from 'components/Input/Input'

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: Colors.White,
    // maxHeight: '100%',
    height: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 15
  }
})

// TODO: use KeyboardAvoidingView

export const AddClientScreen: React.FC = () => {
  const { goBack } = useNavigation()
  return (
    <Container.Modal>
      <View style={styles.root}>
        <Header.Modal onLeftPress={goBack} label='modal.newClient.title' />

        <Input placeholder='CNPJ' state={{ value: '' }} />
        <Input placeholder='Razão social' state={{ value: '' }} />
        <Input placeholder='Nome fantasia' state={{ value: '' }} />
      </View>
    </Container.Modal>
  )
}
