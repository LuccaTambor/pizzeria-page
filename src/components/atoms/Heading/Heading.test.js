import React from 'react';
import { render } from 'test-utils';

import Heading from './Heading';

test('match snapshot', () => {
  const { asFragment } = render(<Heading>Ttile</Heading>)
  
  expect(asFragment()).toMatchSnapshot();
});
