import { Text, Stack } from '@chakra-ui/react';

export const AppBar = () => {
  return (
    <Stack direction={'row'} borderBottom='1px solid' borderColor={'blue.100'} spacing={4}>
      <Text
        margin={['auto', 'auto', 'auto', '1rem 5rem']}
        fontSize='3xl'
        fontWeight={'bold'}
        color='blue.800'
      >
        Dashboard Status
      </Text>
    </Stack>
  );
};
