import useTheme from 'hooks/useTheme'
import useTranslation from 'hooks/useTranslation'
import React from 'react'
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'
import { Translation } from 'types/common'

interface Props extends TextProps {
  t?: Translation
  style?: StyleProp<TextStyle>
}

const Label: React.FC<Props> = ({ t, style, children }) => {
  const { Font } = useTheme()
  const translate = useTranslation()

  if (t)
    return <Text style={[style, Font.family.Montserrat]}>{translate(t)}</Text>

  return <Text style={[style, Font.family.Montserrat]}>{children}</Text>
  
}

const Title: React.FC<Props> = (props) => {
  const { Font } = useTheme()
  return <Label {...props} style={[Font.size.title, Font.weight.bold, props.style]} />
}

const H1: React.FC<Props> = (props) => {
  const { Font } = useTheme()
  return <Label {...props} style={[Font.size.xxl, Font.weight.semibold, props.style]} />
}

const H2: React.FC<Props> = (props) => {
  const { Font } = useTheme()
  return <Label {...props} style={[Font.size.xl, Font.weight.semibold, props.style]} />
}

const H3: React.FC<Props> = (props) => {
  const { Font } = useTheme()
  return <Label {...props} style={[Font.size.lg, Font.weight.semibold, props.style]} />
}

export default {
  Title,
  H1,
  H2,
  H3
}