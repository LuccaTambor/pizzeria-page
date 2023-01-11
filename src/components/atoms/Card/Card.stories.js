import React from "react";

import Card, { CardBody, CardMedia  } from "./Card";
import Section from "components/molecules/Section/Section";
import Heading from "components/atoms/Heading/Heading";
import Button from "components/atoms/Button/Button";

import FlavourImage from "stories/assets/margherita.jpg";

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: {CardBody, CardMedia}
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae veritatis molestias provident magni aut mollitia.</p>
        <div>
          <Button variant="link" color="primary">Know more</Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const withMedia = () => (
<Section inverse>
    <Card>
      <CardMedia image={FlavourImage}/>
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae veritatis molestias provident magni aut mollitia.</p>
        <div>
          <Button variant="link" color="primary">Know more</Button>
        </div>
      </CardBody>
    </Card>
  </Section>

);
