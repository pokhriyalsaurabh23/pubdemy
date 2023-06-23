import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Navigate, Outlet, Route } from 'react-router-dom';
import Dashboard from './dashboard.component';

describe('Dashboard component', () => {
  it('renders the child components correctly', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Dashboard />
        <Route path="/dashboard">
          <div data-testid="child-component">Child Component</div>
        </Route>
      </MemoryRouter>
    );

    expect(getByTestId('child-component')).toBeInTheDocument();
  });

  it('renders the Outlet component correctly', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Dashboard />
        <Route path="/dashboard">
          <Outlet data-testid="outlet-component" />
        </Route>
      </MemoryRouter>
    );

    expect(getByTestId('outlet-component')).toBeInTheDocument();
  });

  it('renders a Navigate component correctly', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Dashboard />
        <Route path="/dashboard">
          <Navigate to="/other-page" data-testid="navigate-component" />
        </Route>
      </MemoryRouter>
    );

    expect(getByTestId('navigate-component')).toBeInTheDocument();
  });
});
