import React from 'react';
import { text } from '@storybook/addon-knobs';

import Hero from './Hero';
import BgImage01 from "../../stories/assets/pizza01.jpg";
import BgImage02 from "../../stories/assets/pizza02.jpg";
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

export default {
  title: "Components/Hero",
  component: Hero
};

export const usage = () => (
  <Hero image={BgImage01}> 
    <Heading>
      <h1>The best <strong> pizza </strong> you'll ever eat</h1>
    </Heading>
    <p>The Pizzeria of your dreams</p>
    <Button color='primary' variant='outlined'>Order now</Button>
  </Hero>
);

export const withList = () => (
  <Hero image={BgImage02}>
    <Heading>
      <h1>{text('Title', "The best pizza you will ever eat")}</h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
    </ul>
    <Button color='primary' variant='outlined'>Order now</Button>
  </Hero>
);
