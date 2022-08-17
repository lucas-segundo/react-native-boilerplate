import React from 'react'
import { Box, Button } from 'native-base'
import { StackNavigationProps } from '../../../../App'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation<StackNavigationProps>()
  return (
    <Box safeArea>
      <Box
        alignSelf="center"
        bg="primary.500"
        _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'warmGray.50',
          letterSpacing: 'lg',
        }}
      >
        This is a Box
      </Box>
      <Button onPress={() => navigation.navigate('Details')}>
        Go to details
      </Button>
    </Box>
  )
}

export default Home
