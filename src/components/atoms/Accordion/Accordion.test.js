import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import { cli } from 'webpack';

import Accordion from './Accordion';

const text = "chidren text";
const myTitle = 'My Title';

test('renders with title', () => {
  render(<Accordion title={myTitle}></Accordion>);

  expect(screen.getByText(myTitle)).toBeInTheDocument();
});

test('renders without children', () => {
  render(<Accordion>{text}</Accordion>);

  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

test('triggers onChange when clicked', async () => {
  const handleChange = jest.fn();
  render(<Accordion title={myTitle} onChange={handleChange}></Accordion>);

  await fireEvent.click(screen.getByText(myTitle));

  expect(handleChange).toBeCalledTimes(1);
});

describe('when is controlled', () => {
  describe('when starts open', () => {
    test('renders with children', () => {
      render(<Accordion open>{text}</Accordion>);

      expect(screen.queryByText(text)).toBeInTheDocument();
    });

    test('triggers onChange when clicked', () => {
      const { rerender } = render(<Accordion title={myTitle} open>{text}</Accordion>);   
      rerender(<Accordion title={myTitle}>{text}</Accordion>);
      
      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });

    test('hide children when open changes to false', async () => {
      const handleChange = jest.fn();
      render(<Accordion title={myTitle} onChange={handleChange} open></Accordion>);   

      await fireEvent.click(screen.getByText(myTitle));
      
      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });

    test('call default function when callled', () => {
      render(<Accordion title={myTitle} open></Accordion>);   
      
      expect(screen.queryByText(myTitle)).toBeInTheDocument();
    });
  });

  describe('when starts closed', () => {
    test('renders with children', () => {
      render(<Accordion>{text}</Accordion>);

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });
});
