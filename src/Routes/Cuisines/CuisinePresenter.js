import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import FoodImage from "../../Components/FoodImage";

const Container = styled.div`
  padding: 20px;
`;

const CuisinePresenter = ({ korean, american, mexican, loading, error }) => {
  return (
    <>
      <Helmet>
        <title>Cuisine | Recipe Book</title>
      </Helmet>
      {loading ? (
        <Loader></Loader>
      ) : (
        <Container>
          {error ? (
            <Message text={error} color="gray" />
          ) : (
            <>
              <Section title="Korean">
                {korean &&
                  korean.length > 0 &&
                  korean.map((recipe) => (
                    <FoodImage
                      key={recipe.id}
                      id={recipe.id}
                      imageUrl={recipe.image}
                      title={recipe.title}
                    />
                  ))}
              </Section>
              <Section title="American">
                {american &&
                  american.length > 0 &&
                  american.map((recipe) => (
                    <FoodImage
                      key={recipe.id}
                      id={recipe.id}
                      imageUrl={recipe.image}
                      title={recipe.title}
                    />
                  ))}
              </Section>
              <Section title="Mexican">
                {mexican &&
                  mexican.length > 0 &&
                  mexican.map((recipe) => (
                    <FoodImage
                      key={recipe.id}
                      id={recipe.id}
                      imageUrl={recipe.image}
                      title={recipe.title}
                    />
                  ))}
              </Section>
            </>
          )}
        </Container>
      )}
    </>
  );
};

CuisinePresenter.propTypes = {
  korean: PropTypes.array,
  american: PropTypes.array,
  mexican: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default CuisinePresenter;
