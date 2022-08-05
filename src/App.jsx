import { ChakraProvider } from '@chakra-ui/react';
import { Dashboard } from '@/components/Dashboard/Dashboard';
function App() {
  return (
    <ChakraProvider>
      <Dashboard />
    </ChakraProvider>
  );
}
export default App;