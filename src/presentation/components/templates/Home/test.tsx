import { screen } from '@testing-library/react-native'
import Home from '.'
import { renderWithProviders } from '../../../helpers/render-with-providers'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

const makeSut = () => {
  renderWithProviders(<Home />)
}

describe('Home', () => {
  it('should render correctly', () => {
    makeSut()

    const button = screen.getByText('Go to details')

    expect(button).toBeTruthy()
  })
})
