import PropTypes from 'prop-types';
import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';

const Wrapper = ({ children }) => <ChakraProvider>{children}</ChakraProvider>;

Wrapper.propTypes = {
  children: PropTypes.node,
};

const renderWithProviders = (ui) => {
  return render(ui, { wrapper: Wrapper });
};

export * from '@testing-library/react';
export { renderWithProviders };
