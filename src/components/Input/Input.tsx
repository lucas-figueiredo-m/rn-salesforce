import useTheme from 'hooks/useTheme'
import React from 'react'
import { TextInput, TextInputProps, StyleSheet, StyleProp, TextStyle, View } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
  interpolate
} from 'react-native-reanimated'
import { Colors } from 'theme'
import { FontSize } from 'theme/fonts'
import { Metrics } from 'theme/spacing'

interface InputState {
  value: string
  error?: string
}

interface Props extends TextInputProps {
  state: InputState
  placeholder: string
  customStyle?: StyleProp<TextStyle>
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 5,
    borderWidth: 1
  },
  placeholder: {
    position: 'absolute',
    backgroundColor: Colors.White
  }
})

enum InputStatus {
  Blur,
  Focus,
  Error
}

export const Input: React.FC<Props> = ({ state, placeholder, customStyle, ...props }) => {
  const { Spacing, Font } = useTheme()
  const placeholderStatus = useSharedValue<InputStatus>(InputStatus.Blur)

  const containerStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [Colors.MediumGrey, Colors.Flame, Colors.DarkRed]
    )

    return { borderColor }
  })

  const placeholderStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [Colors.MediumGrey, Colors.Flame, Colors.DarkRed]
    )

    const bottom = interpolate(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [Metrics.xs, 2 * Metrics.xs + FontSize.lg - FontSize.md / 2, 2 * Metrics.xs + FontSize.lg - FontSize.md / 2]
    )

    const left = interpolate(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [Metrics.sm, 2 * Metrics.xxs, 2 * Metrics.xxs]
    )

    const fontSize = interpolate(
      placeholderStatus.value,
      [InputStatus.Blur, InputStatus.Focus, InputStatus.Error],
      [FontSize.md, FontSize.sm, FontSize.sm]
    )

    return {
      color,
      bottom,
      left,
      fontSize
    }
  })

  return (
    <View style={Spacing.paddings.vertical.xs}>
      <Animated.View style={[styles.root, containerStyle]}>
        <TextInput
          style={[
            Spacing.paddings.vertical.xs,
            Spacing.paddings.horizontal.sm,
            Font.family.Montserrat,
            Font.size.md,
            customStyle
          ]}
          onFocus={() => (placeholderStatus.value = withTiming(InputStatus.Focus, { duration: 200 }))}
          onBlur={() => (placeholderStatus.value = withTiming(InputStatus.Blur, { duration: 200 }))}
          value={state.value}
          {...props}
        />
        <Animated.Text
          style={[
            styles.placeholder,
            placeholderStyle,
            Font.family.Montserrat,
            Font.weight.semibold,
            Spacing.paddings.horizontal.xs
          ]}
        >
          {placeholder}
        </Animated.Text>
      </Animated.View>
    </View>
  )
}
