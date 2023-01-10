import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

import Feature from "./Feature";
import Grid from "components/atoms/Grid/Grid";

export default {
  title: "Components/Atoms/Feature",
  component: Feature
};

export const usage = () => (
  <Feature icon={<FaPizzaSlice />} title="title">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </Feature>
);

export const withGrid = () => (
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
);
