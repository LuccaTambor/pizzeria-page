import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

import Feature from "./Feature";

export default {
  title: "Components/Atoms/Feature",
  component: Feature
};

export const usage = () => (
  <Feature icon={<FaPizzaSlice />} title="title">
    Algum Texto
  </Feature>
);
