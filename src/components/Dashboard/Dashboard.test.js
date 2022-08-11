import axios from 'axios';
import { renderWithProviders, screen } from '@/test-utils/customRender';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Dashboard } from './Dashboard';
import { formatTime } from '@/helpers/formatTime';

describe('Dashboard', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('Should render a StatusCard with the given endpoint', async () => {
    const endpoints = ['abc'];
    const mAxiosResponse = {
      data: { hostname: 'foo-123', message: 'foo-bar', success: true, time: 123 },
    };

    jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);
    renderWithProviders(<Dashboard endpoints={endpoints} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByText(endpoints[0])).toBeInTheDocument();
    expect(await screen.findByText('foo-123')).toBeInTheDocument();
    expect(await screen.findByText('foo-bar')).toBeInTheDocument();
    expect(await screen.findByText(formatTime(123)));
  });
});
