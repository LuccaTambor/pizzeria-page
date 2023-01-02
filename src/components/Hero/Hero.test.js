import React from 'react';
import { render } from '@testing-library/react';

import Hero from './Hero';

test('renders Hero with children', () => {
  const { getByText } = render(
    <Hero>
      <p>Test Here</p>
    </Hero>
  )

  expect(getByText("Test Here")).toBeInTheDocument(); 
});

test('renders image background', () => {
  const image = "http://test/image.jpg";

  const { getByTestId } = render (
    <Hero image={image} />
  );

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image
  });
});
