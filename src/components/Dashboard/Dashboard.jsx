import React from 'react';
import { Flex } from '@chakra-ui/react';
import { AppBar } from '../AppBar/AppBar';
import { Status } from '../Status/Status';
import { useGetResources } from '@/hooks/useGetResources';

// Modify this value for changing the time in seconds between each refetch.
const SECONDS_FOR_REFECTH = 15;

export const Dashboard = () => {
  const { resources } = useGetResources(SECONDS_FOR_REFECTH);
  return (
    <Flex direction={'column'} backgroundColor='white' flex='1' width={'100%'} height={'auto'}>
      <AppBar />
      <Status resources={resources} />
    </Flex>
  );
};
