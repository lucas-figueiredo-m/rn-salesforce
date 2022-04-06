import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { StyleSheet, View } from 'react-native'
import { Colors } from 'theme'
import Container from 'components/Container/Container'

import Header from 'components/Header/Header'
import { Input } from 'components/Input/Input'
import Button from 'components/Button/Button'
import useTheme from 'hooks/useTheme'
import { ClientNavigationProp, ClientRoutes } from 'navigator/NewClientStack/NewClientTypes'

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: Colors.White,
    // maxHeight: '100%',
    height: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 15
  },
  height: { height: 100 },
  width: { width: '40%' }
})

// TODO: use KeyboardAvoidingView

export const RegisterMerchantScreen: React.FC = () => {
  const { goBack, navigate } = useNavigation<ClientNavigationProp<ClientRoutes.Merchant>>()
  const { Layout } = useTheme()
  return (
    <Container.Modal>
      <View style={styles.root}>
        <Header.Modal onLeftPress={goBack} label='modal.newClient.title' />

        <Input placeholder='CNPJ' required state={{ value: '' }} />
        <Input placeholder='Razão social' required state={{ value: '' }} />
        <Input placeholder='Nome fantasia' required state={{ value: '' }} />
        <View style={[Layout.direction.row, Layout.justify.spaceBetween, Layout.sizes.fullWidth, styles.height]}>
          <Input
            customContainerStyle={[styles.width, Layout.sizes.fullHeight]}
            placeholder='CEP'
            required
            state={{ value: '' }}
          />
          <Input
            customContainerStyle={[styles.width, Layout.sizes.fullHeight]}
            placeholder='Bairro'
            required
            state={{ value: '' }}
          />
        </View>
        <Input placeholder='Logradouro' required state={{ value: '' }} />
        <Input placeholder='Complemento' state={{ value: '' }} />
        <Input placeholder='Cidade' required state={{ value: '' }} />
        <Input placeholder='Estado' required state={{ value: '' }} />
        <Input placeholder='Telefone' required state={{ value: '' }} />
        <Input placeholder='Referência' required state={{ value: '' }} />
        <Button.Large
          backgroundColor={Colors.Flame}
          t='common.continue'
          labelColor={Colors.White}
          onPress={() => navigate(ClientRoutes.Employees)}
        />
      </View>
    </Container.Modal>
  )
}
