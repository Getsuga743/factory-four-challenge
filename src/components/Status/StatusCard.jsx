import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text } from '@chakra-ui/react';
import { formatTime } from '@/helpers/formatTime';
import { Spinner } from '@chakra-ui/react';

export const StatusCard = ({ data, name }) => {
  const { success, message, hostname, time, status } = data;
  const formatedTime = formatTime(time);

  if (success === undefined) {
    return (
      <Flex
        direction={'column'}
        justifyContent='center'
        height='100%'
        bg='blue.50'
        boxShadow={'lg'}
        borderRadius='xl'
        border={'2px solid'}
        borderColor='blue.800'
        padding={'1rem'}
        margin='auto'
      >
        <Spinner
          thickness='4px'
          margin='auto'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.800'
          size='xl'
        />
      </Flex>
    );
  }
  if (success) {
    return (
      <Flex
        direction={'column'}
        justifyContent='center'
        height='100%'
        bg='blue.50'
        boxShadow={'lg'}
        borderRadius='xl'
        border={'2px solid'}
        borderColor='green.500'
        padding={'1rem'}
      >
        <Text
          textAlign='center'
          color='blue.800'
          fontSize={'2xl'}
          fontWeight='bold'
          textTransform={'capitalize'}
        >
          {name}
        </Text>
        <Text
          textAlign='center'
          borderRadius='md'
          backgroundColor={'green.700'}
          color='white'
          fontSize={'2xl'}
          fontWeight='bold'
          width='80%'
          margin={'auto'}
        >
          {message}
        </Text>
        <Text margin={'auto'} textAlign='center' fontSize={'lg'} fontWeight='bold' color='blue.800'>
          {hostname}
        </Text>
        <Text
          textAlign='center'
          fontSize={'lg'}
          fontWeight='bold'
          color='blue.800'
          backgroundColor='blue.100'
          borderRadius='full'
          padding={'0.2rem 0.5rem'}
          width='80%'
          margin={'auto'}
        >
          {formatedTime}
        </Text>
      </Flex>
    );
  }

  return (
    <Flex
      direction={'column'}
      height='100%'
      bg='blue.50'
      boxShadow={'lg'}
      borderRadius='xl'
      border={'2px solid'}
      borderColor='red.700'
      padding={'1rem'}
    >
      <Text
        textAlign='center'
        color='blue.800'
        fontSize={'2xl'}
        fontWeight='bold'
        textTransform={'capitalize'}
        width='80%'
        margin={'0 auto'}
      >
        {name}
      </Text>
      <Text
        textAlign='center'
        borderRadius='md'
        backgroundColor={'red.700'}
        color='white'
        marginX='2rem'
        fontSize={'2xl'}
        fontWeight='bold'
      >
        {status}
      </Text>
      <Text
        textAlign='center'
        fontSize={'lg'}
        fontWeight='bold'
        color='red.800'
        padding={'0.2rem 0.5rem'}
        width='80%'
        margin={'auto'}
      >
        {message}
      </Text>
    </Flex>
  );
};

StatusCard.propTypes = {
  data: PropTypes.shape({
    hostname: PropTypes.string,
    message: PropTypes.string,
    status: PropTypes.any,
    success: PropTypes.bool,
    time: PropTypes.number,
  }),
  name: PropTypes.string,
};
