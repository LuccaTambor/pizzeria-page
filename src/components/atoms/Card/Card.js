import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//#region Card (Main Component)
const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
`;

const Card = ({ children }) => (
  <StyledCard>
    {children}
  </StyledCard>
);

Card.defaultProps = {
  children: undefined
};

Card.propTypes = {
  children: PropTypes.node
};
//#endregion

//#region CardBody (Subcomponent)
const StyledBody = styled.div`
  padding: 16px;

  h6 {
    margin-top: 0;
  }
`;

export const CardBody = ({ children }) => (
  <StyledBody>
    {children}
  </StyledBody>
);

CardBody.defaultProps = {
  children: undefined
};

CardBody.propTypes = {
  children: PropTypes.node
};
//#endregion

//#region CardMedia (Subcomponent)
const StyledMedia = styled.div`
  background-image: url(${props => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
`;

export const CardMedia = ({ image}) => (
  <StyledMedia image={image}>
  </StyledMedia>
);

CardMedia.defaultProps = {
  image: undefined
};

CardMedia.propTypes = {
  image: PropTypes.string
};
//#endregion

//Exporting main component
export default Card;
