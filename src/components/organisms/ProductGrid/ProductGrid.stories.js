import React from "react";

import ProductGrid from "./ProductGrid";

import FlavourImage from "stories/assets/margherita.jpg";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid
};

export const usage = () => (
  <ProductGrid 
    products={[
      { id: 1, image: FlavourImage, title: "Title 1", summary: "Text summary"},
      { id: 2, image: FlavourImage, title: "Title 2", summary: "Text summary"},
      { id: 3, image: FlavourImage, title: "Title 3", summary: "Text summary"},
      { id: 4, image: FlavourImage, title: "Title 4", summary: "Text summary"},
      { id: 5, image: FlavourImage, title: "Title 5", summary: "Text summary"},
      { id: 6, image: FlavourImage, title: "Title 6", summary: "Text summary"},
    ]}
  />
);
