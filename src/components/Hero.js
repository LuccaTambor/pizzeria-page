import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import { breakAt, BreakpointSize } from './Breakpoints';

const mainColor = '#2EDF74';

const Root = styled.div`
  color: #fff;
  padding: 100px 0;
  margin: 0;

  ${props => css`
    background: url(${props.image }), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

// const Title = styled.h1`
//   position: relative;
//   font-weight: 700;
//   letter-spacing: 2px;
//   margin-bottom: 25px;
//   padding-bottom: 25px;
//   border-bottom: 1px solid rgba(255, 255, 255, 0.2);

//   &::after {
//     content: "";
//     position: absolute;
//     left: 0;
//     bottom: -3px;
//     background-color: ${mainColor};
//     height: 5px;
//     width: 70px;
//   }
// `;

const Content = styled.div`
  p, li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li::before {
    content: "\\2713\\0020";
    color: ${mainColor};
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSize.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSize.lg)} {
    width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

const Hero = ({ image, children }) => (
  <Root image={image}>
    <Container>
      <Content>
        {children}
      </Content> 
      <button className="">Order Now</button>
    </Container>
  </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node
};

export default Hero;
