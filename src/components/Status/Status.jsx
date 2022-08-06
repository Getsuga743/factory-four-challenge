import PropTypes from 'prop-types';
import React from 'react';

import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { StatusCard } from './StatusCard';

export const Status = ({ resources }) => {
  return (
    <Flex margin={['1rem', '2rem', '2rem', '2rem 5rem']}>
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(5, 1fr)',
        ]}
        gap={'1.5rem'}
        height='auto'
        flex='1'
        justifyContent={'center'}
        alignContent={'space-between'}
        alignItems={'center'}
      >
        {Object.keys(resources).map((resource) => {
          return (
            <GridItem w='100%' h='12rem' key={resource}>
              <StatusCard data={resources[resource]} name={resource} key={resource} />
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};

Status.propTypes = {
  resources: PropTypes.object,
};
