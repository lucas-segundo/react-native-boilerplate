import React from 'react'
import { NativeBaseProvider, Box } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
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
      </Box>
    </NativeBaseProvider>
  )
}
