import React from 'react'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'

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
    <KeyboardAvoidingView behavior='position' style={[styles.fullScreen, styles.flexBottom]}>
      {children}
    </KeyboardAvoidingView>
  )
}

export default {
  Modal
}
