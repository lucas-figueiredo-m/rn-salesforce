import { StackNavigationOptions, TransitionPresets } from '@react-navigation/stack'
import { Platform } from 'react-native'
import { Colors } from 'theme'

export const modalOptions: StackNavigationOptions = {
  presentation: Platform.OS === 'ios' ? 'modal' : 'transparentModal',
  headerShown: false,
  cardStyle: {
    // justifyContent: "flex-end",
    backgroundColor: Colors.Transparent
  },
  ...Platform.select({
    android: TransitionPresets.FadeFromBottomAndroid
  })
}
