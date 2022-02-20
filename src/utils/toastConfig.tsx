import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ToastConfig } from 'react-native-toast-message';
import { Colors } from 'theme';
import wifiOff from 'assets/icons/wifi-off.svg'

import { useTranslation } from 'react-i18next';
import { SVG } from 'components';
import { FontFamily } from 'theme/fonts';

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '90%',
    backgroundColor: Colors.White,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10
  },
  colorBar: {
    backgroundColor: Colors.DarkRed,
    height: 80,
    width: '3%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  icon: {
    marginHorizontal: 10
  },
  content: {
    flex: 1
  },
  title: {
    fontFamily: FontFamily.Montserrat,
    fontWeight: '600'
  },
  message: {
    fontFamily: FontFamily.Montserrat,
    fontSize: 12
  }
})

export const toastConfig: ToastConfig = {
  wifiToast: ({ onPress }) => {
    const { t } = useTranslation();
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.container}>
        <View style={styles.colorBar} />
        <SVG style={styles.icon} xml={wifiOff} color={Colors.MediumGrey} width={35} height={35} />
        <View style={styles.content}>
          <Text style={styles.title}>{t('error.wifi.title')}</Text>
          <Text style={styles.message}>{t('error.wifi.message')}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
