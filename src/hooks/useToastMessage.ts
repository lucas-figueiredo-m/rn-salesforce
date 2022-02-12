import Toast from "react-native-toast-message"


export default () => {
  const wifiDisconnected = (text1: string) => {
    Toast.show({
      type: 'wifiToast',
      position: 'top',
      text1,
      visibilityTime: 5000,
      autoHide: true,
    })
  }

  return {
    wifiDisconnected
  }
}