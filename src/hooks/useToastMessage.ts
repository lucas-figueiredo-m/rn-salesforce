import Toast from 'react-native-toast-message'

export default () => {
  const wifiDisconnected = () => {
    Toast.show({
      type: 'WifiToast',
      position: 'top',
      visibilityTime: 7500,
      autoHide: true,
      onPress: () => Toast.hide()
    })
  }

  return {
    wifiDisconnected
  }
}
