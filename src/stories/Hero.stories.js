import React from 'react';

import Hero from '../components/Hero';
import BgImage01 from "./assets/pizza01.jpg";
import BgImage02 from "./assets/pizza02.jpg";

export default {
  title: "Hero",
  component: Hero
};

export const usage = () => (
  <Hero title="The best pizza you'll ever eat" image={BgImage01}> 
    <p>The Pizzeria of your dreams</p>
  </Hero>
);

export const withList = () => (
  <Hero title="The best pizza you'll ever eat" image={BgImage02}>
    <ul>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
    </ul>
  </Hero>
);
