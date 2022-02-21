import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1
  },
  flexBottom: {
    justifyContent: 'flex-end',
    flexDirection: 'column'
  }
})

const Modal: React.FC = ({ children }) => {
  return (
    <View style={[styles.fullScreen, styles.flexBottom]}>
      {children}
    </View>
  )
}

export default {
  Modal
}