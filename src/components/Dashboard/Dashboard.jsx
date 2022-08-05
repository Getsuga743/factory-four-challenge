import { Flex } from '@chakra-ui/react';
import { AppBar } from '../AppBar/AppBar';


export const Dashboard = () => {
  return (
    <Flex direction={'column'} backgroundColor='white' flex='1' width={'100%'} height={'auto'}>
      <AppBar />
    </Flex>
  );
};