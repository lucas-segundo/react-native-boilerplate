import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import Home from './presentation/components/templates/Home'
import Details from './presentation/components/templates/Details'

type RootStackParamList = {
  Home: undefined
  Details: undefined
}

export type StackNavigationProps = NativeStackScreenProps<RootStackParamList>

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
