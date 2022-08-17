import { NavigationContainer } from '@react-navigation/native'
import { render, screen } from '@testing-library/react-native'
import { NativeBaseProvider } from 'native-base'
import Home from '.'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
}

const makeSut = () => {
  render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

describe('Home', () => {
  it('should render correctly', () => {
    makeSut()

    const button = screen.getByText('Go to details')

    expect(button).toBeTruthy()
  })
})
