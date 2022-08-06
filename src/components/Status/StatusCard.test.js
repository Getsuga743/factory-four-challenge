import React from 'react';
import { StatusCard } from './StatusCard';
import { renderWithProviders, screen } from '@/test-utils/customRender';
import { formatTime } from '@/helpers/formatTime';

const MOCK_DATA = {
  success: true,
  message: 'message',
  hostname: 'hostname',
  time: 123123,
  error: '403',
};

const NAME = 'foo';

describe('Status', () => {
  it('Should render correctly', () => {
    const { container } = renderWithProviders(<StatusCard data={MOCK_DATA} name={NAME} />);
    expect(container).toBeTruthy();
  });

  it('Should render a spinner if success undefined.', () => {
    renderWithProviders(<StatusCard data={{ success: undefined }} />);
    screen.getByText('Loading...');
  });

  it('Should have name, message, hostname and time props render if success.', () => {
    renderWithProviders(<StatusCard data={MOCK_DATA} name={NAME} />);

    screen.getByText(NAME);

    screen.getByText(MOCK_DATA.message);

    screen.getByText(MOCK_DATA.hostname);

    const formatedTime = formatTime(MOCK_DATA.time);

    screen.getByText(formatedTime);
  });

  it('Should not have error if is a success.', () => {
    renderWithProviders(<StatusCard data={MOCK_DATA} name={NAME} />);

    const error = screen.queryByText(MOCK_DATA.error);
    expect(error).not.toBeInTheDocument();
  });

  it('Should not have hostname and time props render if not success', () => {
    const MOCK_DATA = {
      success: false,
      message: 'message',
      hostname: 'hostname',
      time: 123123,
      error: '403',
    };
    const NAME = 'foo';

    renderWithProviders(<StatusCard data={MOCK_DATA} name={NAME} />);

    const hostName = screen.queryByText(MOCK_DATA.hostname);
    expect(hostName).not.toBeInTheDocument();

    const formatedTime = formatTime(MOCK_DATA.time);
    const time = screen.queryByText(formatedTime);
    expect(time).not.toBeInTheDocument();
  });
});
