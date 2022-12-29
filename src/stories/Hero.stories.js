import React from 'react';

import Hero from '../components/Hero';
import BgImage01 from "./assets/pizza01.jpg";
import BgImage02 from "./assets/pizza02.jpg";

export default {
  title: "Hero",
  component: Hero
};

export const usage = () => (
  <Hero image={BgImage01}> 
    <h1>The best <strong> pizza </strong> you'll ever eat</h1>
    <p>The Pizzeria of your dreams</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgImage02}>
    <h1>The best <strong> pizza </strong> you'll ever eat</h1>
    <ul>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
    </ul>
  </Hero>
);
