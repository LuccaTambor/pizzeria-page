import React from "react";
import { render } from "test-utils";

import Feature from "./Feature";

test('renders the title', () => {
  const { getByText } = render(<Feature title="test title"></Feature>);

  expect(getByText("test title")).toBeInTheDocument();
});

test('renders the children', () => {
  const { getByText } = render(<Feature>test children</Feature>);

  expect(getByText("test children")).toBeInTheDocument();
});
