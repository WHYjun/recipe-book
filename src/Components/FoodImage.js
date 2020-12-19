import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Image = styled.div`
  background-image: url(${(props) => `${props.bgUrl}`});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
`;

const Title = styled.span`
  display: block;
  font-size: 12px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
`;

const FoodImage = ({ id, imageUrl, title }) => (
  <Link to={`/recipe/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imageUrl} />
      </ImageContainer>
      <Title>{title}</Title>
    </Container>
  </Link>
);

FoodImage.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
};

export default FoodImage;
