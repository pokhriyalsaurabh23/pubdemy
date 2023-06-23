import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FeaturedTopics from './featuredTopics.component';

describe('FeaturedTopics component', () => {
  test('renders the "Explore more topic" button', () => {
    render(
      <MemoryRouter>
        <FeaturedTopics />
      </MemoryRouter>
    );
    const exploreButton = screen.getByRole('button', { name: /explore more topic/i });

    expect(exploreButton).toBeInTheDocument();
  });
});
