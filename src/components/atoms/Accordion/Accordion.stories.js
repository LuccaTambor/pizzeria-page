import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "components/atoms/AccordionGroup/AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion
};

export const usage = () => (
  <>
    <Accordion title="Common question?">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla saepe esse cupiditate. Cum iste ea officia soluta quasi, quisquam et consequatur deleniti eligendi quo doloremque rem aliquid commodi facere porro. 
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Common question?">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla saepe esse cupiditate. Cum iste ea officia soluta quasi, quisquam et consequatur deleniti eligendi quo doloremque rem aliquid commodi facere porro. 
    </Accordion>
    <Accordion title="Common question?">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla saepe esse cupiditate. Cum iste ea officia soluta quasi, quisquam et consequatur deleniti eligendi quo doloremque rem aliquid commodi facere porro. 
    </Accordion>
    <Accordion title="Common question?">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla saepe esse cupiditate. Cum iste ea officia soluta quasi, quisquam et consequatur deleniti eligendi quo doloremque rem aliquid commodi facere porro. 
    </Accordion>
  </AccordionGroup>
)
