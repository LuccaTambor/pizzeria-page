import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { FaPhone, FaBuilding, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import Container from "components/atoms/Container/Container";
import Grid from "components/atoms/Grid/Grid";
import Heading from "components/atoms/Heading/Heading";

const Root =  styled.footer`
  padding: 40px 0;
  background-color: #2a2a2a;
  color: #aaa;

  h6 {
    margin-top: 0;
    color: #fff;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primary.light};;
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Ficticium Pizzeria</h6>
          </Heading>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure eum saepe numquam fugit! Tempore a ullam porro rerum assumenda aliquid, corrupti, quibusdam recusandae suscipit cum rem dolore optio nulla!</p>
        </div>
        <div>
          <Heading>
            <h6>Contacts</h6>
          </Heading>
          <p>
            
            (11) 99123-4567
          </p>
          <p>
            <IconContainer><FaBuilding /></IconContainer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem incidunt magnam at.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Socials</h6>
          </Heading>
          <p>
            <FooterLink target="_blank" href="">
              <IconContainer><FaFacebookF /></IconContainer>
              Facebook
            </FooterLink>
          </p>
          <p> 
            <FooterLink target="_blank" href="">
              <IconContainer><FaLinkedinIn /></IconContainer>
              LinkedIn
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="">
              <IconContainer><FaTwitter /></IconContainer>
              Twitter
            </FooterLink>
          </p>
        </div>
      </Grid>
    </Container>
  </Root>
);

// Footer.defaultProps = {};

// Footer.propTypes = {};

export default Footer;
