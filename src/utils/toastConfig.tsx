import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ToastConfig } from 'react-native-toast-message';
import { Colors } from 'theme';

import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: Colors.Aqua
  }
})

export const toastConfig: ToastConfig = {
  wifiToast: ({ text1 }) => {
    const { t } = useTranslation();
    return (
      <View style={styles.container}>
        <Text>{t(String(text1))}</Text>
      </View>
    )
  }
}
