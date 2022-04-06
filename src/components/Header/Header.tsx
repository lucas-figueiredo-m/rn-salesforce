import Label from 'components/Label/Label'
import { defaultHitSlop } from 'constants/buttons'
import React from 'react'
import { View, Pressable } from 'react-native'
import { Translation } from 'types/common'
import x from 'assets/icons/x.svg'
import { SVG } from 'components/SVG/SVG'
import { Colors } from 'theme'
import useTheme from 'hooks/useTheme'

interface Props {
  onLeftPress: () => void
  label: Translation
  icon?: string
}

const Modal: React.FC<Props> = ({ onLeftPress, label, icon = x }) => {
  const { Font, Layout } = useTheme()

  return (
    <View style={Layout.rows.verticalCenter}>
      <Pressable onPress={onLeftPress} hitSlop={defaultHitSlop}>
        <SVG xml={icon} width={30} height={30} color={Colors.Black} />
      </Pressable>
      <Label.H3 t={label} style={Font.transform.uppercase} />
    </View>
  )
}

export default {
  Modal
}
