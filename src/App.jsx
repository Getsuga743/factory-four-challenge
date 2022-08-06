import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Dashboard } from '@/components/Dashboard/Dashboard';
import { endpoints } from '@/helpers/endpoints';

function App() {
  return (
    <ChakraProvider>
      <Dashboard endpoints={endpoints} />
    </ChakraProvider>
  );
}
export default App;
