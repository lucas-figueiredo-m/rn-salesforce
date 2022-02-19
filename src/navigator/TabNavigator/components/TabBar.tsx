import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React, { useMemo } from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import { line, curveBasis, arc as Arc } from 'd3-shape';

const lineGenerator = line()
  .x(([x]) => x)
  .y(([, y]) => y);

const arc = Arc()

const { width } = Dimensions.get('window')

const TAB_HEIGHT = 80
const CENTRAL_CAVITY = TAB_HEIGHT
const TAB_WIDTH = (width - CENTRAL_CAVITY)/4

export const TabBar: React.FC<BottomTabBarProps> = ({
  descriptors,
  insets,
  state,
  navigation
}) => {
  console.log('Descriptors: ', state.routes.length)

  const dLeft = useMemo(() => {

    const left = lineGenerator([
      [0, 0],
      [TAB_WIDTH * 2, 0],
      [TAB_WIDTH * 2, TAB_HEIGHT],
      [0, TAB_HEIGHT],
    ])

    return `${left}`
  }, [])

  const dRight = useMemo(() => {
    const right = lineGenerator([
      [TAB_WIDTH * 2 + CENTRAL_CAVITY, 0 ],
      [width, 0],
      [width, TAB_HEIGHT ],
      [TAB_WIDTH * 2 + CENTRAL_CAVITY, TAB_HEIGHT ],
    ])

    return `${right}`
  }, [])

  const dCenterLeft = useMemo(() => {
    const circle = arc({
      innerRadius: 0,
      outerRadius: TAB_HEIGHT/4,
      startAngle: 0,
      endAngle: Math.PI / 2,
    })

    return `${circle}`
  }, [])

  const dCenterRight = useMemo(() => {
    const circle = arc({
      innerRadius: 0,
      outerRadius: TAB_HEIGHT/4,
      startAngle: -Math.PI / 2,
      endAngle: 0,
    })

    return `${circle}`
  }, [])

  const dCenter = useMemo(() => {
    const circle = arc({
      innerRadius: 0,
      outerRadius: TAB_HEIGHT/2,
      startAngle: Math.PI / 2,
      endAngle: 3 * Math.PI/2,
    })

    return `${circle}`
  }, [])

  return (
    <View>
      <Svg height={80} width='100%'>
        <Path fill='red' { ...{ d: dLeft }} />
        <Path fill='red' { ...{ d: dRight }} />
        <Path
          translateY={TAB_HEIGHT/4}
          translateX={TAB_WIDTH * 2 - TAB_HEIGHT/4}
          fill='blue'
          { ...{ d: dCenterLeft }}
        />
        <Path
          translateY={TAB_HEIGHT/4}
          translateX={TAB_WIDTH * 2 + TAB_HEIGHT/2}
          fill='blue'
          { ...{ d: dCenter }}
        />
        <Path
          translateY={TAB_HEIGHT/4}
          translateX={TAB_WIDTH * 2 + TAB_HEIGHT + TAB_HEIGHT/4}
          fill='blue'
          { ...{ d: dCenterRight }}
        />
      </Svg>
      {/* {
        state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

            const isFocused = state.index === index;
            

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                navigation.navigate(route.name, { name: route.name, merge: true });
              }
            };
    
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            const color= (isFocused ? options.tabBarActiveTintColor : options.tabBarInactiveTintColor) || '#000'
            
            const { tabBarIcon } = options
            
            const icon = tabBarIcon ? tabBarIcon({ focused: isFocused, color, size: 24 }) : undefined
            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
              >
                {icon}
                <Text style={{ color }}>
                  {label}
                </Text>
              </TouchableOpacity>
            )
        })
      } */}
    </View>
  )
}