import React from 'react';
import { render, screen, fireEvent } from 'test-utils';

import ProductGrid from './ProductGrid';

const buildProducts = (size) => {
  const result = [];

  for (let i = 0; i < size; i += 1) {
    result.push({ id: i, title: `title ${i}` });
  }

  return result;
}

describe.each([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 3],
  [6, 3]
])("with %i items", (size, showOnly) => {
  test(`show only ${showOnly}`, () => {
    render(<ProductGrid products={buildProducts(size)}/>);
  
    expect(screen.getAllByRole("heading").length).toBe(showOnly);
  });

  test("show all items when button is clicked", async () => {
    render(<ProductGrid products={buildProducts(size)}/>);

    await fireEvent.click(screen.getByText("show all"));

    expect(screen.getAllByRole("heading").length).toBe(size);
  })
})


