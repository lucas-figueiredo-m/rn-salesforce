import useToastMessage from 'hooks/useToastMessage'
import React from 'react'
import { View , Text, TouchableOpacity } from 'react-native'

const HomeScreen: React.FC = () => {
  const { wifiDisconnected } = useToastMessage()
  
  return (
    <View>
      <TouchableOpacity
        onPress={() => wifiDisconnected('error.wifiDisconnected')}
        style={{ width: 100, height: 40, backgroundColor: 'yellow' }}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen