import React from 'react';
import { render } from '@testing-library/react';
import Error from './error.component';

describe('Error component', () => {
  it('renders the error message correctly', () => {
    const { getByText } = render(<Error />);

    expect(getByText('Page Not Found')).toBeInTheDocument();
    expect(getByText('The requested page could not be found.')).toBeInTheDocument();
  });
});
