import withObservables, { ObservableifyProps } from '@nozbe/with-observables'
import { Client as ClientDB } from 'models'
import React from 'react'
import { Text, View } from 'react-native'
import { Client, tables } from 'storage'
import { styles } from './styles'

interface Props {
  client: ClientDB[]
}

type InputProps = ObservableifyProps<Props, 'client'>

export const ClientCardToObserve: React.FC<Props> = ({ client }) => {
  return (
    <View style={styles.root}>
      <Text>Hello World</Text>
    </View>
  )
}

const enhance = withObservables(['client'], ({ client }: InputProps) => ({
  client
}))

export const ClientCard = enhance(ClientCardToObserve)