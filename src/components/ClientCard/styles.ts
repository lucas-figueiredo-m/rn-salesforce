import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from 'theme'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  root: {
    width: width * 0.9,
    height: 100,
    backgroundColor: Colors.Aqua,
    alignSelf: 'center'
  }
})