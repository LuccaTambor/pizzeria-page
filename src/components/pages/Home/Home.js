import React from "react";
// import PropTypes from "prop-types";
import { FaPizzaSlice } from "react-icons/fa";

import Hero from 'components/molecules/Hero/Hero';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Feature from "components/atoms/Feature/Feature";
import Grid from "components/atoms/Grid/Grid";
import Section from "components/molecules/Section/Section";
import Footer from "components/organisms/Footer/Footer";
import ProductGrid from "components/organisms/ProductGrid/ProductGrid";
import Accordion from "components/atoms/Accordion/Accordion";
import AccordionGroup from "components/atoms/AccordionGroup/AccordionGroup";

import PizzaBg from "assets/pizzaBg.jpg";
import PizzaVideo from "assets/pizzaVideo.mp4";

import Flavour1Image from "assets/margherita.jpg";
import Flavour2Image from "assets/ham.jpg";
import Flavour3Image from "assets/hawaian.png";
import Flavour4Image from "assets/argula.jpg";
import Flavour5Image from "assets/pepperoni.jpg";
import Flavour6Image from "assets/veggie.jpg";

const products = [
  { id: 1, title: "Margherita", summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae veritatis molestias provident magni aut mollitia.", image: Flavour1Image},
  { id: 2, title: "Pepperoni", summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae veritatis molestias provident magni aut mollitia.", image: Flavour5Image},
  { id: 3, title: "Hawaian", summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae veritatis molestias provident magni aut mollitia.", image: Flavour3Image},
  { id: 4, title: "Argula", summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae veritatis molestias provident magni aut mollitia.", image: Flavour4Image},
  { id: 5, title: "Ham", summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae veritatis molestias provident magni aut mollitia.", image: Flavour2Image},
  { id: 6, title: "Veggie", summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae veritatis molestias provident magni aut mollitia.", image: Flavour6Image},
];

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
    <Section inverse>
      <Heading>
        <h2> Some of our flavours </h2>
        <ProductGrid products={products}/>
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2> Our Story </h2>
          </Heading>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil laudantium, repudiandae beatae laborum reprehenderit optio error recusandae ab iure in eveniet harum necessitatibus vero tempore ex similique earum atque eum!</p>
          <Button color="primary">Read more</Button>
        </div>
        <div>
          <video src={PizzaVideo} width="100%" autoPlay loop muted/>
        </div>
      </Grid>
      
    </Section>
    <Section inverse>
      <Heading>
        <h2> Frequent Questions </h2>
      </Heading>
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
    </Section>
    <Footer />
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
