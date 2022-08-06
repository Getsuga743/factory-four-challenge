import React from 'react';
import { Status } from './Status';
import { renderWithProviders, screen } from '@/test-utils/customRender';
import { formatTime } from '@/helpers/formatTime';

const MOCK_DATA = {
  accounts: {
    success: true,
    message: 'Healthy :3',
    hostname: 'accounts-53b571c48f6c',
    time: 1659819931549,
    error: null,
  },
  assets: {
    success: true,
    message: 'Healthy :3',
    hostname: 'assets-95d5a558fdef',
    time: 1659819931553,
    error: null,
  },
  customers: {
    success: true,
    message: 'Healthy :3',
    hostname: 'customers-b5ac7100b7f5',
    time: 1659819931549,
    error: null,
  },
};

const MOCK_DATA_ARRAY = Object.keys(MOCK_DATA).map((key) => {
  return MOCK_DATA[key];
});

describe('Status', () => {
  it('Should render correctly', () => {
    const { container } = renderWithProviders(<Status resources={MOCK_DATA} />);
    expect(container).toBeInTheDocument();
  });

  it('Should render a group of Status Card base on resources prop', () => {
    const names = Object.keys(MOCK_DATA);

    renderWithProviders(<Status resources={MOCK_DATA} />);

    MOCK_DATA_ARRAY.forEach((statusProps, index) => {
      screen.getByText(names[index]);
      screen.getAllByText(statusProps.message);
      screen.getByText(statusProps.hostname);
      screen.getAllByText(formatTime(statusProps.time));
    });
  });

  it('Should render two StatusCard, one with error', () => {
    const MOCK_DATA = {
      assets: {
        success: true,
        message: 'Healthy :3',
        hostname: 'assets-95d5a558fdef',
        time: 1659819931553,
        error: null,
      },
      customers: {
        success: false,
        message: 'b5ac7100b7f5',
        hostname: 'foobar',
        time: 1659819931549,
        error: 'Error',
      },
    };
    const { assets, customers } = MOCK_DATA;
    const names = Object.keys(MOCK_DATA);

    renderWithProviders(<Status resources={MOCK_DATA} />);

    // Card 1 (assets)
    screen.getByText(names[0]);
    screen.getByText(assets.message);
    screen.getByText(assets.hostname);
    screen.getByText(formatTime(assets.time));

    // Card 2 with error (customers)
    screen.getByText(names[1]);
    screen.getByText(customers.error);
    screen.getByText(customers.message);
  });
});
