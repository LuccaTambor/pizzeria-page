import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Grid from "components/atoms/Grid/Grid";
import Card, { CardMedia, CardBody} from "components/atoms/Card/Card";
import Heading from "components/atoms/Heading/Heading";
import Button from "components/atoms/Button/Button";

const Toolbar = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const ProductGrid = ({ products }) => {
  const [showAll, setShowAll] = useState(false);
  const filteredProducts = showAll ? products : products.slice(0, 3);

  return(
    <>
      <Grid md={3}>
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardMedia image={product.image} />
            <CardBody>
              <Heading>
                <h6>{product.title}</h6>
              </Heading>
              <p>{product.summary}</p>
              <div>
                <Button variant="link" color="primary">Know more</Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </Grid>
      {!showAll && (
        <Toolbar>
          <Button 
          variant="outlined" 
          onClick={() => {
            setShowAll(true);
          }}
          >show all</Button>
        </Toolbar>
      )}
    </>
  )
};

ProductGrid.defaultProps = {
  products: [],
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      image: PropTypes.string,
      title: PropTypes.string,
      summary: PropTypes.string
    })
  )
};

export default ProductGrid;
