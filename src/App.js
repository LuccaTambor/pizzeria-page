import React from 'react';
import { FaPizzaSlice } from "react-icons/fa";

import Hero from 'components/molecules/Hero/Hero';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import ThemeProvider from 'styles/ThemeProvider';
import GlobalStyle from 'styles/GlobalStyle';
import Feature from "components/atoms/Feature/Feature";
import Grid from "components/atoms/Grid/Grid";

import PizzaBg from 'assets/pizzaBg.jpg';

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <Hero image={PizzaBg}>
    <Heading>
      <h1>The best pizza you will ever eat</h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
    </ul>
    <Button color='primary' variant='outlined'>Order now</Button>
    </Hero>
    <Grid sm={2} md={4}>
      <Feature icon={<FaPizzaSlice />} title="title">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </Feature>
      <Feature icon={<FaPizzaSlice />} title="title">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </Feature>
      <Feature icon={<FaPizzaSlice />} title="title">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </Feature>
      <Feature icon={<FaPizzaSlice />} title="title">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </Feature>
    </Grid>
  </ThemeProvider>
)

export default App
