import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { TouchableOpacity, View } from 'react-native'
import { Colors } from 'theme'

export const AddClientScreen: React.FC = () => {
  const { goBack } = useNavigation()
  return (
    <TouchableOpacity onPress={goBack} style={{ width: '100%', height: '70%', backgroundColor: Colors.White }} />
  )
}