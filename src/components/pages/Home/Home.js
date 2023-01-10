import React from "react";
// import PropTypes from "prop-types";
import { FaPizzaSlice } from "react-icons/fa";

import Hero from 'components/molecules/Hero/Hero';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Feature from "components/atoms/Feature/Feature";
import Grid from "components/atoms/Grid/Grid";
import Section from "components/molecules/Section/Section";

import PizzaBg from "assets/pizzaBg.jpg";

const Home = () => (
  <>
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
    <Section>
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
    </Section>
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
