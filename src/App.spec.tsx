import { render, screen } from '@testing-library/react-native'
import App from './App'

describe('App', () => {
  it('should render', () => {
    render(<App />)

    expect(screen.getAllByText(/open/i).length).toBe(1)
  })
})
