import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import FoodImage from "../../Components/FoodImage";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-top: 20px;
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  results,
  searchQuery,
  loading,
  error,
  handleSubmit,
  updateQuery,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Recipe Name"
        value={searchQuery}
        onChange={updateQuery}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message text={error} color="gray" />
    ) : (
      <>
        {results && results.length > 0 && (
          <Section title="Recipes">
            {results.map((recipe) => (
              <FoodImage
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                imageUrl={recipe.image}
              />
            ))}
          </Section>
        )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  results: PropTypes.string,
  searchQuery: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateQuery: PropTypes.func.isRequired,
};

export default SearchPresenter;
