import useToastMessage from 'hooks/useToastMessage'
import React from 'react'
import { Text, TouchableOpacity, SafeAreaView } from 'react-native'

const HomeScreen: React.FC = () => {
  const { wifiDisconnected } = useToastMessage()
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'green'}}>
      <TouchableOpacity
        onPress={() => wifiDisconnected()}
        style={{ width: 100, height: 40, backgroundColor: 'yellow' }}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen