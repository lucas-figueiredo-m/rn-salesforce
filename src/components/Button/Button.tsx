import React from 'react'
import { Pressable, PressableProps, StyleProp, TextStyle, ViewStyle } from 'react-native'
import Label from 'components/Label/Label'
import { Colors } from 'theme'
import useTheme from 'hooks/useTheme'
import { Translation } from 'types/common'

interface ButtonProps extends PressableProps {
  backgroundColor: Colors
  t: Translation
  style?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  labelColor?: Colors
}

const Button: React.FC<ButtonProps> = ({ backgroundColor, t, labelStyle, labelColor, style, ...props }) => {
  return (
    <Pressable {...props} style={[style, { backgroundColor }]}>
      <Label.H3 t={t} color={labelColor} style={labelStyle} />
    </Pressable>
  )
}

const Large: React.FC<ButtonProps> = props => {
  const { Layout, Spacing } = useTheme()
  return (
    <Button
      {...props}
      style={[Layout.sizes.fullWidth, Spacing.paddings.vertical.sm, Layout.alignment.center, Spacing.border.md]}
    />
  )
}

export default {
  Large
}
